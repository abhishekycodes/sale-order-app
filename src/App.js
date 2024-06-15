import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import Navbar from './component/Navbar';
import ActiveSaleOrders from './pages/ActiveSaleOrders';
import CompletedSaleOrders from './pages/CompletedSaleOrders';
import ThemeToggle from './component/ThemeToggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        {isAuthenticated && <Navbar />}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/active" element={isAuthenticated ? <ActiveSaleOrders /> : <Navigate to="/login" />} />
          <Route path="/completed" element={isAuthenticated ? <CompletedSaleOrders /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/active" : "/login"} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
