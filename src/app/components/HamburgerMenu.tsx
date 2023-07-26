'use client';

import React, { useEffect, useRef, useState } from 'react';
import hamburgerMenuStyles from '@/app/styles/HamburgerMenu.module.css';
import { createPortal } from 'react-dom';
import CategoryButtons from './CategoryButtons';
import { AnimatePresence, motion } from 'framer-motion';

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuRef = useRef<any>();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current !== null && !menuRef.current.contains(e.target)) {
        e.stopPropagation();
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    const handleEscPress = (e: KeyboardEvent) => {
      if (menuOpen && e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscPress);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEscPress);
    };
  });

  return (
    <>
      <svg
        className={hamburgerMenuStyles.hamburgerMenuButton}
        onClick={toggleMenu}
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={menuOpen === true ? `Close menu` : `Open menu`}
      >
        <rect width="16" height="3" fill="white" />
        <rect y="6" width="16" height="3" fill="white" />
        <rect y="12" width="16" height="3" fill="white" />
      </svg>

      <AnimatePresence key={'hamburgerMenu'}>
        {menuOpen && (
          <motion.div
            className={hamburgerMenuStyles.hamburgerMenuDropdown}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            ref={menuRef}
          >
            <CategoryButtons />
          </motion.div>
        )}
      </AnimatePresence>

      {menuOpen &&
        createPortal(
          <div
            className={hamburgerMenuStyles.hamburgerMenuDropdownBackground}
          ></div>,
          document.body
        )}
    </>
  );
}
