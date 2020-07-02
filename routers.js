import { lazy } from 'react';

// {
//   title: 'keepalive',
//   path: '/keepalive',
// },

export default [
  {
    path: '/',
    component: lazy(() => import('./page/Home/index')),
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
    component: lazy(() => import('./page/NavigationGuard')),
  },
];