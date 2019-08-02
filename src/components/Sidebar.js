import React from 'react';
import SocialLink from './SocialLink';
import Link from 'gatsby-link';

export default () => {
  return (
    <aside>
      <section>
        <p>
          Canadian Software Developer building apps for the web, Android and
          iOS.
        </p>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/web-dev">Web</Link>
          <Link to="/adventure">Adventure</Link>
          {/* <Link to="/game-dev">Games</Link> */}
        </nav>

        <SocialLink />
      </section>
    </aside>
  );
};
