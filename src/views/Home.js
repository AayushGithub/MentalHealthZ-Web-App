import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import MentorshipTitle from '../components/sections/MentorshipTitle';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <MentorshipTitle />
      <Testimonial topDivider />
    </>
  );
}

export default Home;