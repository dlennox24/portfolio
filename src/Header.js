import React from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  appBar: {
    background: 'rgba(27, 27, 27, 0.2)',
    boxShadow: 'none',
  },
  toolbarRoot: {
    justifyContent: 'center',
  },
  headerLink: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    fontFamily: 'Open Sans',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
});

const Home = props => {
  const { classes } = props;
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbarRoot}>
        <Typography variant="subheading" color="inherit" className={classes.headerLink}>
          Projects
        </Typography>
        <Typography variant="subheading" color="inherit" className={classes.headerLink}>
          About
        </Typography>
        <Typography variant="subheading" color="inherit" className={classes.headerLink}>
          Resume
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withSiteData(withStyles(styles)(Home));
