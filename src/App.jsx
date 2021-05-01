import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import DashboardContainer from './modules/dashboard/DashboardContainer';
import BudgetViewerContainer from './modules/budget-viewer/BudgetViewerContainer';
import store from './store';
import theme from './theme';


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
    <div className="App">
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
                  <Switch>
                    {routes.map( (route, i) => {
                      return <Route {...route} key={i}/>;
                    })}
                  </Switch>
          </ThemeProvider>
        </Provider>
      </Router>
    </div>
  );
}

export default App;