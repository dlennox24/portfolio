import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Particles from 'react-particles-js';
import SiteBackground from '../components/SiteBackground';
import SiteNav from '../components/SiteNav';
import particlesJsConfig from '../config/particlesjs';

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
        <AppBar position="static">
          <Toolbar>
            <Particles params={particlesJsConfig} canvasClassName={classes.particles} />
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </SiteBackground>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
