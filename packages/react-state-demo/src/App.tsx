import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import './App.css';
import routes from './layout/routes';
import { Inspector } from 'react-dev-inspector';

const App: React.FC = () => {
  const isDev = process.env.NODE_ENV === 'development';

  const AppContent = (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </AppLayout>
    </Router>
  );

  return isDev ? <Inspector keys={['F9']}>{AppContent}</Inspector> : AppContent;
};

export default App;
