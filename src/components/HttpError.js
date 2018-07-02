/* global window */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
//
import SiteNav from './SiteNav';

const style = theme => ({
  '@global': {
    '@keyframes pulse': {
      '0%': {
        color: theme.palette.grey[100],
      },
      '50%': {
        color: theme.palette.secondary.main,
      },
      '100%': {
        color: theme.palette.grey[100],
      },
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
  faIcon: {
    marginRight: theme.spacing.unit,
  },
  mdIcon: {
    fontSize: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  subheader: {
    padding: '15px 0',
  },
  errorContainer: {
    background: 'rgba(27,27,27,.75)',
    textAlign: 'center',
    width: '50%',
    maxWidth: 800,
    color: 'white',
  },
  pulse: {
    animation: 'pulse 3s infinite',
  },
  title: {
    wordBreak: 'break-word',
  },
  navContainer: {
    maxWidth: 500,
    margin: '0 auto',
  },
});

const HttpError = props => {
  const { classes, code, linkedButton, subheader } = props;
  const errors = [
    {
      code: 403,
      title: 'Forbidden',
      subheader: 'You do not have the correct permissions to access this content.',
    },
    {
      code: 404,
      title: 'Not Found',
      subheader: (
        <div>
          <Typography variant="title" color="inherit">
            <code>{typeof window !== 'undefined' ? window.location.pathname : ''}</code>
          </Typography>
        </div>
      ),
    },
    {
      code: 500,
      title: 'Internal Server Error',
      subheader: 'An error occured. Please try again.',
    },
  ];

  const error = _.find(errors, o => o.code === code);
  error.linkedButton = linkedButton || error.linkedButton;
  error.subheader = subheader || error.subheader;

  return (
    <div className={classes.wrapper}>
      <div className={classes.errorContainer}>
        <Typography variant="display4" className={classes.pulse}>
          {error.code}
        </Typography>
        <Typography variant="display2" className={classes.title} color="inherit">
          {error.title}
        </Typography>
        <Typography variant="subheading" className={classes.subheader} color="inherit">
          {error.subheader}
        </Typography>
        <div className={classes.navContainer}>
          <SiteNav />
        </div>
      </div>
    </div>
  );
};

HttpError.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.oneOf([401, 403, 404, 500]),
  linkedButton: PropTypes.object,
  subheader: PropTypes.node,
};

export default withStyles(style)(HttpError);
