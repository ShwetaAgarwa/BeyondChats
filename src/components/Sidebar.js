import React from 'react';
import styles from '../styles/Sidebar.module.css';
import classNames from 'classnames'; 

function Sidebar({ isOpen }) {
  return (
    <div className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      <h2>BeyondChats</h2>
      <ul>
        <li>Dashboard</li>
        <li>Messages</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
