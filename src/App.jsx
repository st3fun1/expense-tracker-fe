import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardContainer from './modules/dashboard/DashboardContainer';
import BudgetViewerContainer from './modules/budget-viewer/BudgetViewerContainer';
import store from './store';
import customTheme from './theme';


const routes = [
 {
   exact: true,
   path: '/', 
   component: DashboardContainer
 },
 {
   path: '/budget',
   component: BudgetViewerContainer,
 }
];


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <StylesProvider>
            <MuiThemeProvider theme={customTheme}>
              <ThemeProvider theme={customTheme}>
                  <Switch>
                    {routes.map( (route, i) => {
                      return <Route {...route} key={i}/>;
                    })}
                  </Switch>
              </ThemeProvider>
            </MuiThemeProvider>
          </StylesProvider>
        </Provider>
      </Router>
    </React.Fragment>
  );
}

export default App;