import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import routerList from './routers';
import NoMatch from './page/NoMatch/index.jsx';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'spectre.css';

function checkAuth() {
  const auth = localStorage.getItem('isLogin');
  console.log('checkAuth auth: ', auth);
  return auth;
}

const App = () => {
  return (
    <Suspense fallback={<div className="loading loading-lg"></div>}>
      <Router>
        <Switch>
          {routerList
            .filter(v => !v.title || !v.needAuth)
            .map((element, idx) => {
              return (
                <Route
                  exact
                  path={element.path}
                  key={idx}
                  render={() => <element.component />}
                ></Route>
              );
            })}
          {routerList
            .filter(v => v.needAuth)
            .map((element, idx) => {
              return (
                <Route
                  exact
                  path={element.path}
                  key={idx}
                  render={() => {
                    return checkAuth() === 'yes' ? (
                      <element.component />
                    ) : (
                      <Redirect
                        to={{
                          pathname: '/login',
                        }}
                      />
                    );
                  }}
                ></Route>
              );
            })}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
