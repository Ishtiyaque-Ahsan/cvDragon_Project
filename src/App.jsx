import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuList from './pages/MenuList';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        {/* home page */}
        
        <Route path="/menulist" element={<MenuList />} /> 
        {/* menulist is page for 'Frame 33908' given in figma design -> you will be directed to it on clicking menubar icon in top-left corner of home page */}
        
        <Route path="/profile" element={<ProfilePage />} />
        {/* Profile Page -> you will be directed to it on clicking profile button in top-right corner of home page */}
      
      </Routes>
      
    </div>
  );
} 

export default App;