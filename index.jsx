import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   // [Get started > Coinbase client - CodeSandbox](https://codesandbox.io/s/get-started-coinbase-client-73r10?file=/src/index.js)
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache(),
// });

const App = () => {
  return (
    <Suspense fallback={<div className="loading loading-lg" />}>
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
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
