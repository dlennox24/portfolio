import React, { PureComponent } from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
//
import Routes from 'react-static-routes'; // eslint-disable-line
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// Custom styles
const styles = () => ({
  '@global': {
    img: {
      maxWidth: '100%',
    },
  },
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
  container: {
    minHeight: '100%',
  },
});

class App extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.container}>
          <CssBaseline />
          <Routes />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default hot(module)(withStyles(styles)(App));
