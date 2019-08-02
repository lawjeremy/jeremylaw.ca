import React from 'react';
import styled from 'styled-components';
import SocialLink from '../components/SocialLink';

const FooterSc = styled.footer`
  margin-top: 20px;
  border-top: 1px solid rgba(132, 148, 123, 0.25);

  h2 {
    font-size: 0.75em;
  }
`;

const Footer = () => {
  return (
    <FooterSc>
      <h2>&copy; {new Date().getFullYear()} Jeremy Law</h2>
      <SocialLink />
    </FooterSc>
  );
};

export default Footer;
