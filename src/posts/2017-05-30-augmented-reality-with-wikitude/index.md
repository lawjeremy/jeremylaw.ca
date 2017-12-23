---
path: "/2017/05/30/testing-the-google-vision-api"
date: "2016-05-30T17:12:33.962Z"
title: "Augmented Reality with Wikitude"
---

I was recently asked to build a prototype Augmented Reality (AR) app to test out some ideas we had for a client. I was using the Appcelerator platform and after some research I decided to use the Wikitude library for the AR functionality.

Wikitude is a very powerful library, but their documentation and examples leave a lot to be desired. It took me a few frustrated days to get my prototype up and running. I am writing as a reference for myself mainly but If anyone else can benefit from it, great! Their documentation is mine field of outdated api docs and misinformation.

Note: If anyone from Wikitude happens to read this and can suggest edits, please reach out and let me know.


## The Goal

My goal was to build a simple prototype that would scan the real world for targets using the device camera and display a message based on the target.

## Setup
As with my other articles, I'm going to skip describing the Appcelerator project setup. You can find out how to that from their documentation. 

Once your project is up and running, download and install the Wikitude module, and you are ready to go.

Note: At the time of writing the Wikitude sdk version is 6.1.0 and that is the version I am using

## Wikitude license key

The Wikitude documentation will tell you to create an account and download a trial license key from the website. I was never actually able to get my app to work with the test license key, and after some back and forth on their forum (https://support.wikitude.com/support/discussions/topics/5000082568) they suggested I use the key from the Wikitude sample app.


## Client vs Cloud


## Creating AR Targets


## Adding the AR

```
ar World = {
  // Using @@@@@ to identify console.log statement from wikitude

  "init": function() {
   
    console.log('@@@@@ World.init called in cloud.js.....');

    var tracker = new AR.CloudRecognitionService("e12275a217730632b884814f83749367", "58f8ce333a3a24801d93d8ef", {
      onInitialized: function() {
         console.log('@@@@@ Loaded cloud recognition service');
      },
      onError: function(e) {
        console.log('@@@@@ ' + e);
      }
    });

    var bannerImg = new AR.ImageResource("assets/wwwButton.jpg");
		var bannerImgOverlay = new AR.ImageDrawable(bannerImg, 0.4, {
			offsetX: 0,
			offsetY: -0.6,
		});

    tracker.recognize(function(e){alert('found!');}, function(){console.log('@@@@@ not found');}); 

  
  },


}

World.init();

```

## HTML, CSS, JS



