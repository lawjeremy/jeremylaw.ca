

import React from "react";
import Helmet from "react-helmet";
import Button from "../components/Button";
var ReactDisqusThread = require('react-disqus-thread');

import styles from '../scss/post.module.scss'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className={styles.blog_post_container}>
      <Helmet title={`Jeremy Law - ${post.frontmatter.title}`} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ReactDisqusThread
          shortname="blogjeremylawca"
          developer="true"
          identifier={post.frontmatter.path}
          title={post.frontmatter.title}
          url={post.frontmatter.path}/>
      </article>
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