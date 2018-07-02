import React from 'react';
import { withSiteData } from 'react-static';
import ParticlesBg from '../../components/ParticlesBg';
import Hero from './Hero';

const Home = () => {
  return (
    <React.Fragment>
      <ParticlesBg>
        <Hero />
      </ParticlesBg>
    </React.Fragment>
  );
};

export default withSiteData(Home);
