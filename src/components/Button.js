import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const ButtonSc = styled.button`
  background: rgba(132, 148, 123, 1);
  color: rgba(255, 255, 255, 1);
  padding: 10px 25px;
  text-decoration: none;
  display: inline-block;
`;

const Button = ({ href, text }) => {
  return <Link to={href}>{text}</Link>;
};

export default Button;
