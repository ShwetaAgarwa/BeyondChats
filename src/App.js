import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} />
      <div className="main" style={{ marginLeft: sidebarOpen ? '240px' : '0', transition: 'margin-left 0.3s ease' }}>
        <Header toggleSidebar={toggleSidebar} />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
