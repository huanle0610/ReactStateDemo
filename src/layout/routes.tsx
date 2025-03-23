import { lazy } from 'react';

// Lazy load the pages
const TodoPage = lazy(() => import('../pages/TodoPage'));
const ProportionalFunctionPage = lazy(
  () => import('../pages/LinearFunctionPage')
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
