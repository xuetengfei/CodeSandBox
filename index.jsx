import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import routerList from './routers';
import NoMatch from './page/NoMatch/index.jsx';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'spectre.css';

const App = () => (
  <Suspense fallback={<div className="loading loading-lg"></div>}>
    <Router>
      <Switch>
        {routerList.map((element, idx) => {
          return (
            <Route
              exact
              path={element.path}
              key={idx}
              render={() => {
                return element.needAuth === true ? (
                  <Redirect
                    to={{
                      pathname: '/login',
                    }}
                  />
                ) : (
                  <element.component />
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
