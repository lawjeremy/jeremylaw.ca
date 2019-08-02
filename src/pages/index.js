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
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                fields {
                  slug
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
                        fluid={
                          post.frontmatter.headerImage.childImageSharp.fluid
                        }
                        alt={post.frontmatter.title}
                        width="100%"
                      />
                      <h1>
                        <Link to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </h1>
                      <h3>{post.frontmatter.date}</h3>
                      <p>{post.excerpt}</p>
                      <Button href={post.fields.slug} text="Read More" />
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
