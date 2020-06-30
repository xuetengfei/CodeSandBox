import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'spectre.css';

const Home = lazy(() => import('./page/Home/index'));
const LAZYLOAD = lazy(() => import('./page/lazyLoad/index.jsx'));
const KeepAlive = lazy(() => import('./page/KeepAlive/index.jsx'));
const LazyLoadImage = lazy(() => import('./page/LazyLoadImage/index.tsx'));
const ConcurrentRestrictor = lazy(() => import('./page/ConcurrentRestrictor'));
const DynamicallyLoadReducers = lazy(() => import('./page/DynamicallyLoadReducers'));
const NoMatch = lazy(() => import('./page/NoMatch/index.jsx'));

const App = () => (
  <Suspense fallback={<div className="loading loading-lg"></div>}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/lazyload">
          <LAZYLOAD />
        </Route>
        <Route exact path="/keepalive">
          <KeepAlive />
        </Route>
        <Route exact path="/lazyLoadImage">
          <LazyLoadImage />
        </Route>
        <Route exact path="/concurrentrestrictor">
          <ConcurrentRestrictor />
        </Route>
        <Route exact path="/dynamically-load-reducers">
          <DynamicallyLoadReducers />
        </Route>
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
