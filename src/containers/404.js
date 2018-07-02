import React from 'react';
import HttpError from '../components/HttpError';
import ParticlesBg from '../components/ParticlesBg';

const Error404 = () => {
  return (
    <ParticlesBg>
      <HttpError code={404} />
    </ParticlesBg>
  );
};

export default Error404;
