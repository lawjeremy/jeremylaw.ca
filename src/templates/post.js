import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

const Container = styled.div`
  max-width: 100%;
}`;

const Article = styled.article`
  max-width: 100%;
  padding: 0 20px;

  h1 {
    font-size: 2em;
    margin: 0.8em 0 auto;
  }

  h3 {
    margin: 0.4em 0;
  }

  img {
    &:not(.headerImage) {
      display: block;
      width: 80%;
      margin: 0 auto;
    }
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
`;

export default ({ data }) => {
  const { markdownRemark: post } = data;
  console.log('frontMatter', post.frontmatter);
  return (
    <Layout>
      <Container>
        <Helmet title={`Jeremy Law - ${post.frontmatter.title}`} />
        <Article>
          <Img
            sizes={post.frontmatter.headerImage.childImageSharp.fluid.sizes}
            width="100%"
            className="headerImage"
            alt={post.frontmatter.title}
          />
          <h1>{post.frontmatter.title}</h1>
          <h3>{post.frontmatter.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Article>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        headerImage {
          absolutePath
          childImageSharp {
            fluid {
              sizes
            }
          }
        }
      }
    }
  }
`;
