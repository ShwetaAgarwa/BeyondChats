import React from 'react';
import styles from '../styles/Header.module.css';

function Header({ toggleSidebar }) {
  return (
    <div className={styles.header}>
      <button className={styles.menuBtn} onClick={toggleSidebar}>☰</button>
      <h3>Admin Panel</h3>
      <div className={styles.profile}>👤 Admin</div>
    </div>
  );
}

export default Header;
