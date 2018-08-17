import React from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
//
import avatarImg from '../../assets/img/avatar.jpg';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

const styles = theme => ({
  heroTitle: {
    color: theme.palette.common.white,
    borderBottom: `3px solid ${theme.palette.common.white}`,
    padding: `${theme.spacing.unit * 2}px 0`,
  },
  hero: {
    margin: '5% auto',
    width: '100%',
    maxWidth: 450,
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
    background: 'rgba(27,27,27,.5)',
  },
  avatar: {
    width: '100%',
    height: 'auto',
  },
  row: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

const Hero = props => {
  const { classes } = props;
  return (
    <div className={classes.hero}>
      <Avatar src={avatarImg} alt="Daniel Lennox" className={classes.avatar} />
      <Typography variant="display2" className={classes.heroTitle}>
        Daniel Lennox
      </Typography>
      <SiteNav home />
      <SiteFooter />
    </div>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withSiteData(withStyles(styles)(Hero));
