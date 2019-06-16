import React from 'react';
import { styled } from 'styled-components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import styles from '../scss/post.module.scss';

//var ReactDisqusThread = require('react-disqus-thread');
const Container = styled.div`
  .blog_post_container {
    max-width: 100%;
  }

  article {
    max-width: 100%;
    padding: 0 20px;

    img {
      &:not(.headerImage) {
        display: block;
        width: 80%;
        margin: 0 auto;
      }
    }

    h1 {
      font-size: 2em;
      margin: 0.8em 0 auto;
    }

    h3 {
      margin: 0.4em 0;
    }

    blockquote {
      background: #f9f9f9;
      margin: 0;
      padding: 0.5em 10px;
      quotes: '\201C''\201D''\2018''\2019';
    }

    blockquote:before {
      color: #ccc;
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }

    blockquote p {
      display: inline;
      font-style: italic;
      line-height: 1.4em;
    }

    pre[class*='language-'] {
      background: #f9f9f9;
    }
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <Container>
      <Helmet title={`Jeremy Law - ${post.frontmatter.title}`} />
      <article>
        <Img
          sizes={post.frontmatter.headerImage.childImageSharp.sizes}
          width="100%"
          className="headerImage"
          alt={post.frontmatter.title}
        />
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <ReactDisqusThread
          shortname="blogjeremylawca"
          developer="true"
          identifier={post.frontmatter.path}
          title={post.frontmatter.title}
          url={post.frontmatter.path}
        /> */}
      </article>
    </Container>
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
        headerImage {
          childImageSharp {
            sizes(maxWidth: 800) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
