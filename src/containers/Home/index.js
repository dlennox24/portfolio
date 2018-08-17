import React from 'react';
import { withSiteData } from 'react-static';
import SiteBackground from '../../components/SiteBackground';
import Hero from './Hero';

const Home = () => {
  return (
    <React.Fragment>
      <SiteBackground particlesjs>
        <Hero />
      </SiteBackground>
    </React.Fragment>
  );
};

export default withSiteData(Home);
