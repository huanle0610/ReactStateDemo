import React, { lazy } from 'react';

// Lazy load the pages
const TodoPage = lazy(() => import('../pages/TodoPage'));
const ProportionalFunctionPage = lazy(
  () => import('../pages/ProportionalFunctionPage')
);

// Define the routes in an array
const routes = [
  {
    path: '/',
    element: <TodoPage />,
  },
  {
    path: '/Linear-function',
    element: <ProportionalFunctionPage />,
  },
];

export default routes;
