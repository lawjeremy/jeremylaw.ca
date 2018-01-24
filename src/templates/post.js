

import React from "react";
import Helmet from "react-helmet";
import Button from "../components/Button";
var ReactDisqusThread = require('react-disqus-thread');

import styles from '../scss/post.scss'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className={styles.blog_post_container}>
      <Helmet title={`Jeremy Law - ${post.frontmatter.title}`} />
      <div className="blog_post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog_post_content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <ReactDisqusThread
          shortname="example"
          identifier="something-unique-12345"
          title="Example Thread"
          url="http://www.example.com/example-thread"
          category_id="123456"
          onNewComment={this.handleNewComment}/>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        headerImage
      }
    }
  }
`;