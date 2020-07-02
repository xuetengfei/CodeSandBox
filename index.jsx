import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'spectre.css';
import routerList from './routers';
import NoMatch from './page/NoMatch/index.jsx';

const App = () => (
  <Suspense fallback={<div className="loading loading-lg"></div>}>
    <Router>
      <Switch>
        {routerList.map((element, idx) => {
          return (
            <Route exact path={element.path} key={idx} render={() => <element.component />}></Route>
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
