import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const App = () => {
  // Retrieve the initial authentication state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Save to localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from localStorage
  };

  useEffect(() => {
    // Effect to handle persistence
    const storedAuthState = localStorage.getItem('isAuthenticated');
    if (storedAuthState === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
