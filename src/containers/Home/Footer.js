import React from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const styles = theme => ({
  iconButton: {
    '&:hover': {
      color: theme.palette.grey[400],
    },
    fontSize: 32,
    margin: theme.spacing.unit,
    color: theme.palette.grey[700],
  },
  row: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const HomeFooter = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className="col-md-3 col-sm-6">
        <IconButton
          component="a"
          href="https://www.github.com/dlennox24"
          className={classes.iconButton}
          color="inherit"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </div>
      <div className="col-md-3 col-sm-6">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/dlennox24/"
          color="inherit"
          className={classes.iconButton}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

HomeFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withSiteData(withStyles(styles)(HomeFooter));
