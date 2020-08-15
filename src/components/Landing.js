import React from 'react';
import Search from './Search';

export default function Landing() {
  return (
    <section className="landing__base">
      <div className="landing-intro">
        <h3>
          The history we've all yearned for and towards, right here in our
          palms.
        </h3>
        <p>Let's begin!</p>
      </div>
      {/* search section */}
      <Search />
    </section>
  );
}
