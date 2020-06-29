import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import loadable from '@loadable/component';
import 'regenerator-runtime/runtime';
import 'intersection-observer';
import 'spectre.css';

const Home = loadable(() => import('./page/Home/index'));
const LAZYLOAD = loadable(() => import('./page/lazyLoad/index.jsx'));
const KeepAlive = loadable(() => import('./page/KeepAlive/index.jsx'));
const LazyLoadImage = loadable(() => import('./page/LazyLoadImage/index.tsx'));
const ConcurrentRestrictor = loadable(() => import('./page/ConcurrentRestrictor'));
const NoMatch = loadable(() => import('./page/NoMatch/index.jsx'));

const App = () => (
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
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
