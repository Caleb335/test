import React from 'react';
import Search from './Search';

export default function Landing() {
  return (
    <section className="landing__base">
      <div className="landing-intro" data-aos="zoom-in-left" data-aos-duration="1500">
        <p className="large">
          The history we've all yearned for and towards, right here in our
          <span data-aos="fade-left"> palms.</span>
        </p>
        {/* <p className="small">Let's begin!</p> */}
      </div>
      {/* search section */}
      <Search />
    </section>
  );
}
