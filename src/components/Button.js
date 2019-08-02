import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const ButtonSc = styled(Link)`
  font-family: Roboto, sans-serif;
  background: #d3dbcf;
  color: #2f2e2e;
  padding: 10px 25px;
  text-decoration: none;
  display: inline-block;
  width: auto;
  margin: 2px;
  text-decoration: none;
  text-transform: uppercase;
`;

export default ({ href, text }) => {
  return <ButtonSc to={href}>{text}</ButtonSc>;
};
