import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Your top level component
import App from './App';
// Your Material UI Custom theme
import theme from './config/muiTheme';

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  const muiTheme = createMuiTheme(theme);

  const component = Comp => (
    <MuiThemeProvider theme={muiTheme}>
      <Comp />
    </MuiThemeProvider>
  );

  const docRoot = document.getElementById('root');

  const render = Comp => renderMethod(component(Comp), docRoot);

  // Render!
  render(App);
}
