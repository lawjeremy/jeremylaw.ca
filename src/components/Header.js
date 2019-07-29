import React from 'react';
import Button from './Button';

export default () => {
  return (
    <header>
      <nav>
        <Button href="/" text="Home" />
        <Button href="/web-dev" text="Web" />
        <Button href="/game-dev" text="Game Dev" />
        <Button href="/adventure" text="Adventure" />
        <Button href="/art" text="Art" />
      </nav>
    </header>
  );
};
