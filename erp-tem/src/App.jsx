// src/App.jsx

import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import MainContent from './components/maincontent/MainContent';
import Login from './components/login/Login'; 

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="">
      {isLoggedIn ? (
        <>
          <Sidebar isOpen={isSidebarOpen} selectedItem={selectedItem} onSelect={handleSelect} />
          <div className={`flex-1 transition-all duration-300 ml-0 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <Header toggleSidebar={toggleSidebar} onLogout={handleLogout} />
            <MainContent />
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} /> 
      )}
    </div>
  );
};

export default App;
