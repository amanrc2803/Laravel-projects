import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './auth/Login';
import Dashboard from './Dashboard';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';




const App = () => {
  return (
    <Router basename='Reactvel-app'>
     

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

       
      </Routes>
    </Router>
  );
};

// DOM rendering
const domNode = document.getElementById('app');
if (!domNode._root) {
  domNode._root = createRoot(domNode);
}
domNode._root.render(<App />);

