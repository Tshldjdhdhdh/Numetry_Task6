import React from 'react';
import './Parallax.css';

const Parallax = () => {
  return (
    <div>
      <section className="parallax"></section>
      <section className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a simple parallax scrolling effect using CSS only.</p>
        <p>Scroll down to see the effect in action.</p>
      </section>
      <section className="parallax"></section>
      <section className="content">
        <h1>More Content</h1>
        <p>Enjoy the smooth scrolling effect!</p>
      </section>
      <section className="parallax"></section>
    </div>
  );
}

export default Parallax;
