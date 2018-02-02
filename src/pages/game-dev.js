import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// import headerImage from "../assets/whistle-pig-screen.jpg";

const GameDevPage = ({data}) => (

  <div>

    <Img sizes={data.file.childImageSharp.sizes} />
    {/* <img src={headerImage} /> */}
    <h1>Game Dev</h1>

    <h2>Why</h2>

    <h2>How</h2>

    <p>For more information or to download, check out <a href="https://whistlepig.info">whistlepig.info</a></p>
    
  </div>
)

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "whistle-pig-screen.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default GameDevPage
