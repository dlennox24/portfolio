import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, withSiteData } from 'react-static';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const activeLink = theme => ({
  width: '100%',
  marginTop: theme.spacing.unit,
  backgroundColor: theme.palette.secondary.main,
});

const styles = theme => ({
  button: {
    '&:hover span:after': activeLink(theme),
    '&:active span:after': activeLink(theme),
    '&:focus span:after': activeLink(theme),
    '& span:after': {
      content: '""',
      display: 'block',
      height: 3,
      backgroundColor: theme.palette.common.white,
      width: '25%',
      margin: '0 auto',
      marginTop: theme.spacing.unit / 2,
      '-webkit-transition': 'all 0.2s ease-out',
      '-moz-transition': 'all 0.2s ease-out',
      '-ms-transition': 'all 0.2s ease-out',
      '-o-transition': 'all 0.2s ease-out',
      transition: 'all 0.2s ease-out',
    },
    textDecoration: 'none',
  },
  linkContainer: {
    minHeight: '1rem',
    margin: `${theme.spacing.unit}px 0`,
    height: `calc(1rem + ${theme.spacing.unit * 2}px)`,
    color: theme.palette.common.white,
  },
  link: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    fontFamily: 'Open Sans',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
});

const HomeHeader = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classNames(classes.linkContainer, 'col-md-4')}>
        <Typography
          variant="button"
          component={Link}
          to="/blog"
          className={classNames(classes.button, classes.link)}
          color="inherit"
        >
          <span>Projects</span>
        </Typography>
      </div>
      <div className={classNames(classes.linkContainer, 'col-md-4')}>
        <Typography
          variant="button"
          component={Link}
          to="/about"
          className={classNames(classes.button, classes.link)}
          color="inherit"
        >
          <span>About</span>
        </Typography>
      </div>
      <div className={classNames(classes.linkContainer, 'col-md-4')}>
        <Typography
          variant="button"
          component={Link}
          to="/post"
          className={classNames(classes.button, classes.link)}
          color="inherit"
        >
          <span>Resume</span>
        </Typography>
      </div>
    </React.Fragment>
  );
};

HomeHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withSiteData(withStyles(styles)(HomeHeader));
