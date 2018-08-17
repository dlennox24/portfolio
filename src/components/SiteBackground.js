import React from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import { withStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
//
import codeBgImg from '../assets/img/code_bg.png';
import particlesJsConfig from '../config/particlesjs';

const styles = () => ({
  root: {
    display: 'contents',
    position: 'relative',
  },
  bgColor: {
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#1b1b1b',
  },
  codeBg: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#1b1b1b',
    backgroundImage: `url(${codeBgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    filter: 'blur(8px)',
  },
  particles: {
    position: 'fixed',
    background: 'none',
    top: 0,
  },
  children: {
    position: 'relative',
  },
});

const SiteBackground = props => {
  const { classes, children, particlesjs } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.bgColor} />
        <div className={classes.codeBg} />
        {particlesjs && (
          <Particles params={particlesJsConfig} canvasClassName={classes.particles} />
        )}
      </div>
      <div className={classes.children}>{children}</div>
    </React.Fragment>
  );
};

SiteBackground.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  particlesjs: PropTypes.bool,
};

export default withSiteData(withStyles(styles)(SiteBackground));
