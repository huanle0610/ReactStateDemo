import { lazy } from 'react';

// Lazy load the pages
const TodoPage = lazy(() => import('../pages/TodoPage'));
const ProportionalFunctionPage = lazy(
  () => import('../pages/LinearFunctionPage')
);
const AppleBasketTotal = lazy(
  () => import('../components/apple-demo/AppleBasketTotal')
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
  {
    path: '/apple',
    element: <AppleBasketTotal />,
  },
];

export default routes;
