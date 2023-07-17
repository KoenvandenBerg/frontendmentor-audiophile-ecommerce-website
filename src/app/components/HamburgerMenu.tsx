'use client';

import React, { useState } from 'react';
import hamburgerMenuStyles from '@/app/styles/HamburgerMenu.module.css';
import { createPortal } from 'react-dom';
import CategoryButton from './CategoryButton';

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        className={hamburgerMenuStyles.hamburgerMenuButton}
        onClick={toggleMenu}
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="3" fill="white" />
          <rect y="6" width="16" height="3" fill="white" />
          <rect y="12" width="16" height="3" fill="white" />
        </svg>
      </button>

      {menuOpen &&
        createPortal(
          <div className={hamburgerMenuStyles.hamburgerMenuDropdownBackground}>
            <div className={hamburgerMenuStyles.hamburgerMenuDropdown}>
              Menu Items
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
