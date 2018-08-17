import React from 'react';
import HttpError from '../components/HttpError';
import SiteBackground from '../components/SiteBackground';

const Error404 = () => {
  return (
    <SiteBackground>
      <HttpError code={404} />
    </SiteBackground>
  );
};

export default Error404;
