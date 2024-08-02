import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SessionContext = createContext();
export const useSession = () => useContext(SessionContext);

const LOGIN_EXPIRY_TIME = 15 * 60 * 1000;

export const SessionProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    const expiry = new Date().getTime() + LOGIN_EXPIRY_TIME;
    const session = { userName: 'user', expiry };
    localStorage.setItem('session', JSON.stringify(session));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('session');
    setIsAuthenticated(false);
    navigate('/login');
    window.location.reload();
  };

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('session'));
    if (session) {
      const { expiry } = session;
      const now = new Date().getTime();

      if (now < expiry) {
        const remainingTime = expiry - now;
        const timerId = setTimeout(() => {
          console.log('Session expired! Logging out...');
          localStorage.removeItem('session');
          navigate('/login');
          window.location.reload();
        }, remainingTime);

        setIsAuthenticated(true);
        return () => clearTimeout(timerId);
      } else {
        localStorage.removeItem('session');
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <SessionContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
