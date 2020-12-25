import React from 'react';
import Header from '../layouts/Header';
import web from '../img/1.png';

const About = () => {
  return (
    <Header name="Welcome to About Page" imgsrc={web} visit="/contact" btnname="Contact Now"/>
  );
}

export default About;