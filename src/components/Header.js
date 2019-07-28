import React from 'react';
import Link from 'gatsby-link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="#">Web</Link>
        <Link to="#">Game Dev</Link>
        {/* <Link to="#">Art</Link> */}
      </nav>
    </header>
  );
};

export default Header;
