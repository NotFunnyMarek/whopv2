// src/components/Sidebar.jsx

import React from 'react';
import '../styles/sidebar.scss';
import { FiHome, FiSearch, FiMessageSquare, FiBell, FiUser } from 'react-icons/fi';

// Logo (přesně jméno logo.png ve složce src/assets/)
import Logo from '../assets/logo.png';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__logo">
      <img src={Logo} alt="Logo platformy" />
    </div>
    <nav className="sidebar__nav">
      <ul>
        <li className="sidebar__nav-item">
          <FiHome className="sidebar__icon" />
        </li>
        <li className="sidebar__nav-item">
          <FiSearch className="sidebar__icon" />
        </li>
        <li className="sidebar__nav-item">
          <FiMessageSquare className="sidebar__icon" />
        </li>
        <li className="sidebar__nav-item">
          <FiBell className="sidebar__icon" />
        </li>
        <li className="sidebar__nav-item">
          <FiUser className="sidebar__icon" />
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
