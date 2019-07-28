import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from 'gatsby-link';
import Button from '../components/Button';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

import styles from '../scss/index.module.scss';

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query IndexQuery {
          allMarkdownRemark(
            filter: { frontmatter: { published: { ne: false } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                excerpt
                id
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  path
                  headerImage {
                    childImageSharp {
                      sizes(maxWidth: 800, maxHeight: 430) {
                        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                        ...GatsbyImageSharpSizes
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: posts } = data.allMarkdownRemark;

        return (
          <Layout>
            <div className={styles.blog_post}>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <div className={styles.blog_post_preview} key={post.id}>
                      <Img
                        sizes={
                          post.frontmatter.headerImage.childImageSharp.sizes
                        }
                        alt={post.frontmatter.title}
                        width="100%"
                      />
                      <h1>
                        <Link to={post.frontmatter.path}>
                          {post.frontmatter.title}
                        </Link>
                      </h1>
                      <h3>{post.frontmatter.date}</h3>
                      <p>{post.excerpt}</p>
                      <Button href={post.frontmatter.path} text="Read More" />
                    </div>
                  );
                })}
            </div>
          </Layout>
        );
      }}
    />
  );
};

export default IndexPage;
