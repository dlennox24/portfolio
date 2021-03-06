import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SiteBackground from '../components/SiteBackground';
import SiteNav from '../components/SiteNav';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: 900,
    width: '80%',
    minWidth: 300,
    background: theme.palette.common.white,
    backgroundColor: 'rgba(255,255,255,.75)',
    height: '100%',
    minHeight: '100vh',
    // padding,
  },
  siteNav: {
    margin: '0 auto',
    maxWidth: 900,
    width: '80%',
    minWidth: 300,
  },
});

const About = props => {
  const { classes } = props;
  return (
    <SiteBackground>
      <SiteNav className={classes.siteNav} />
      <div className={classes.root}>
        <Typography type="headline" gutterBottom>
          {"This is what we're all about."}
        </Typography>
        <Typography type="body1">
          {"React, static sites, performance, speed. It's the stuff that makes us tick."}
        </Typography>
      </div>
    </SiteBackground>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
