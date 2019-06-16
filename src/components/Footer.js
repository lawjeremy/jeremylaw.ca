import React from 'react';
import SocialLink from '../components/SocialLink';
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h2>&copy; {new Date().getFullYear()} Jeremy Law</h2>

        <SocialLink />
      </footer>
    );
  }
}

export default Footer;
