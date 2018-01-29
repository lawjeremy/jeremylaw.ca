---
path: "/2016/07/01/testing-the-google-vision-api"
date: "2016-07-01T17:12:33.962Z"
title: "Testing AWS lambda functions locally with lambda-local and ExpressJS"
published: false
headerImage: ../../assets/dan-gold-382057.jpg
---

The last several projects I have worked on have involved AWS Lambda. I have found Lambda to be a great service for running small chunks of code that are self contained.

## The Goal
[lambda-local](https://www.npmjs.com/package/lambda-local) makes it very easy to test Lambda functions locally. Using this package, you can run each function in isolation and supply it a fake event object.

## The Setup

When I am working on a project involving multiple lambda functions, I like to seperate them into directories with their own dependencies. ie:

```
project_root
|
├── lambda_function_1
|     ├── index.js
|     ├── package.json
|     └── node_modules
├── lambda_function_2
|     ├── index.js
|     ├── package.json
|     └── node_modules
├── tests
├── events
|     └── sample.js
├── node_modules
├── index.js
├── .env
└── package.json

```

This allows me to easily zip up each function directory and upload it to AWS. I keep my tests and environment configuration in the root directory so they can be shared across all the functions in the project.

## Local Testing
The first thing we need to do is Install lambda-local globally

````
npm install -g lambda-local
````

With the package installed we can use it to test our function from the CLI

```
lambda-local -l lambda_function_1/index.js -h handler -e events/sample.js
```

The flags I'm using here are:
-l : the location of the lambda function to test
-h : the name of the handler function
-e : the location of the fake event you would like to send to your function

If everything is configured correctly, you should see the output of your function.


## API Testing
My most common use case for AWS Lambda is to build an API for a small project that doesn't warrant a full codebase or framework. I write a few small functions that perform the CRUD operations I need, put them behind AWS API Gateway, and I have a simple API for my project. During development, I like to point the application at my API to make sure it integrates properly. To expose my lambda functions to the application, I set up [Express](https://expressjs.com) and create some routes.

First we need to install Express into the root folder for our project
````
npm install express --save
````

With Express installed, we will create an index.js file in the root of our project, and require the necessary dependencies. In my case it was also necessary to set some global response headers to make the development API available across domains.
````
#project_root/index.js

const lambdaLocal = require('lambda-local');
const path        = require('path');

var express = require('express');
var app = express();

#setup cross domain access to express
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

````


With Express setup we can create some routes for our local API.  

We create a GET route with the app.get function. It takes a name for the route, and a callback to execute when a request is made to the route. Inside the callback we will use lambda-locals execute function to execute our lambda function. Finally we will send a response with the data returned from our lambda, or an error if one is genereated.

````
#project_root/index.js

...

app.get('/lambda-one', function (req, res) {
  
  lambdaLocal.execute({
    event: {},
    lambdaPath: path.join(__dirname, 'lambda_function_1/index.js'),
    timeoutMs: 10000,
    callback: function(err, data){
      if(err){
        res.status(500).send(err.message);
        return;
      }

      res.status(200).send(data);
    }
  });
});

````

With a post route you can get the 

````

app.post('/lambda-two', function (req, res) {
  
  lambdaLocal.execute({
    event: req.params,
    lambdaPath: path.join(__dirname, 'lambda_function_2/index.js'),
    timeoutMs: 10000,
    callback: function(err, data){
      if(err){
        res.status(500).send(err.message);
        return;
      }

      res.status(200).send(data);
    }
  });
});
````
## Conclusion