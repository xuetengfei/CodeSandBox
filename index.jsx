import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'spectre.css';

const Home = lazy(() => import('./page/Home/index.jsx'));
const LAZYLOAD = lazy(() => import('./page/lazyLoad/index.jsx'));
const NoMatch = lazy(() => import('./page/NoMatch/index.jsx'));
const KeepAlive = lazy(() => import('./page/KeepAlive/index.jsx'));
const LazyLoadImage = lazy(() => import('./page/LazyLoadImage/index.tsx'));
const ConcurrentRestrictor = lazy(() => import('./page/ConcurrentRestrictor'));

const App = () => {
  return (
    <>
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
            <Route exact path="/LazyLoadImage">
              <LazyLoadImage />
            </Route>
            <Route exact path="/concurrentrestrictor">
              <ConcurrentRestrictor />
            </Route>
            <Route exact path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
