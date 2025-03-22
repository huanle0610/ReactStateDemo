import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import TodoPage from './pages/TodoPage';
import ProportionalFunctionPage from './pages/ProportionalFunctionPage';

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route
            path="/proportional-function"
            element={<ProportionalFunctionPage />}
          />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
