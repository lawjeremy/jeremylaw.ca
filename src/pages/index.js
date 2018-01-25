import React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import Button from "../components/Button";

import styles from "../scss/index.module.scss";

function IndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className={styles.blog_post}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className={styles.blog_post_preview} key={post.id}>
              <div className={styles.blog_header_image} style={{background: 'url(' + post.frontmatter.headerImage + ')', 'background-size': 'cover'}}></div>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <h3>{post.frontmatter.date}</h3>
              <p>{post.excerpt}</p>
              <Button href={post.frontmatter.path} text="Read More" />
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { published: {ne: false}} }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            headerImage
          }
        }
      }
    }
  }
`;

export default IndexPage