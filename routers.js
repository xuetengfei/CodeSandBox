import { lazy } from 'react';

export default [
  {
    path: '/',
    component: lazy(() => import('./page/Home/index')),
  },
  {
    path: '/Login',
    component: lazy(() => import('./page/Login')),
  },
  {
    path: '/touched-button',
    title: 'touched-button',
    component: lazy(() => import('./page/touched-button')),
  },
  {
    path: '/performance',
    title: 'performance',
    component: lazy(() => import('./page/window-performance')),
  },
  {
    path: '/exposure',
    title: 'exposure',
    component: lazy(() => import('./page/exposure')),
  },
  {
    path: '/lazyload',
    title: 'Lazyload Components',
    component: lazy(() => import('./page/lazyLoad/index.jsx')),
  },
  {
    path: '/lazyLoadImage',
    title: 'LazyLoad Image',
    component: lazy(() => import('./page/LazyLoadImage/index.tsx')),
  },
  {
    path: '/concurrentrestrictor',
    title: 'Concurrent Restrictor',
    component: lazy(() => import('./page/ConcurrentRestrictor')),
  },
  {
    path: '/dynamically-load-reducers',
    title: 'Dynamically Load Reducers',
    component: lazy(() => import('./page/DynamicallyLoadReducers')),
  },

  {
    path: '/navigation-guard',
    title: 'Navigation Guard',
    needAuth: true,
    component: lazy(() => import('./page/NavigationGuard')),
  },
  {
    path: '/setState-Callback',
    title: 'setState Callback',
    component: lazy(() => import('./page/SetStateCallback')),
  },
  {
    path: '/react-batch-updates',
    title: 'react-batch-updates',
    component: lazy(() => import('./page/react-batch-updates')),
  },
  {
    path: '/ui',
    title: 'UI && Styles',
    component: lazy(() => import('./page/StylesCompontents/index.tsx')),
  },
  {
    path: '/graphql',
    title: 'Graphql',
    component: lazy(() => import('./page/Graphql/index')),
  },
  {
    path: '/css',
    title: 'css',
    component: lazy(() => import('./page/css-demo')),
  },
];
