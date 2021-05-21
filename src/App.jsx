import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./store";
import customTheme from "./theme";
import Layout from "./modules/layout/Layout";
import routes from "./routes";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Provider store={store}>
        <StylesProvider>
          <MuiThemeProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
              <Router>
                <Layout>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                      {routes.map((route, i) => {
                        return <Route {...route} key={i} />;
                      })}
                    </Switch>
                  </Suspense>
                </Layout>
              </Router>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
