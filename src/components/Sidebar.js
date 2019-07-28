import React, { Component } from 'react';
import SocialLink from './SocialLink';

const Sidebar = () => {
  return (
    <aside>
      <section>
        <p>
          Canadian Software Developer building apps for the web, Android and
          iOS.
        </p>

        {/* <nav>
            <Link to="/">Blog</Link>
            <Link to="/web-dev">Web</Link>
            <Link to="/game-dev">Games</Link>
          </nav> */}

        <SocialLink />
      </section>
    </aside>
  );
};

export default Sidebar;
