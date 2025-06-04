// src/components/BottomBar.jsx

import React, { useState, useRef } from 'react';
import '../styles/bottombar.scss';
import { FiMenu, FiStar, FiHeart, FiSettings, FiUser, FiBell } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const iconComponents = [FiSettings, FiSettings, FiSettings, FiSettings, FiSettings];

const BottomBar = () => {
  const { theme, setLight, setDark } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredX, setHoveredX] = useState(null);
  const iconsContainerRef = useRef(null);

  const handleMenuClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleThemeChange = (e) => {
    e.target.value === 'light' ? setLight() : setDark();
  };

  // Při pohybu myší nad kontejnerem ikon uložíme X
  const handleMouseMove = (e) => {
    setHoveredX(e.clientX);
  };

  const handleMouseLeave = () => {
    setHoveredX(null);
  };

  return (
    <div className="bottombar">
      {/* Levá část: Menu */}
      <div className="bottombar__left">
        <button className="bottombar__left-button" onClick={handleMenuClick}>
          <FiMenu size={20} /> Menu
        </button>
        <div className={`bottombar__left-dropdown ${dropdownOpen ? 'visible' : ''}`}>
          <div className="bottombar__left-dropdown-item bottombar__left-dropdown-item-theme">
            <div>
              <input
                type="radio"
                id="theme-light"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
              />
              <label htmlFor="theme-light">Světlé</label>
            </div>
            <div>
              <input
                type="radio"
                id="theme-dark"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
              />
              <label htmlFor="theme-dark">Tmavé</label>
            </div>
          </div>
          <div className="bottombar__left-dropdown-item bottombar__left-dropdown-item-whatsnew">
            Whats New <span>6/4/25</span>
          </div>
          <a
            className="bottombar__left-dropdown-item bottombar__left-dropdown-item-help"
            href="https://discord.gg/SqQskHWb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need help?
          </a>
        </div>
      </div>

      {/* Absolutně umístěný kontejner ikon ve středu */}
      <div
        className="bottombar__center-icons"
        ref={iconsContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {iconComponents.map((Icon, idx) => {
          if (hoveredX === null) {
            // Žádný hover = všechny dole
            return (
              <div key={idx} className="bottombar__center-icon">
                <Icon size={20} />
              </div>
            );
          }
          // Vypočítáme efekt pro každou ikonu
          const container = iconsContainerRef.current;
          const { left, width } = container.getBoundingClientRect();
          const segment = width / iconComponents.length;
          const iconCenterX = left + segment * (idx + 0.5);
          const dx = Math.abs(hoveredX - iconCenterX);
          const maxRadius = segment * 2; 
          let t = 1 - dx / maxRadius;
          if (t < 0) t = 0;
          const translateY = -t * 12;

          return (
            <div
              key={idx}
              className="bottombar__center-icon"
              style={{
                transform: `translateY(${translateY}px)`,
                transition: 'transform 0.2s ease',
              }}
            >
              <Icon size={20} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
