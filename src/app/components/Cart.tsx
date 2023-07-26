'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import cartStyles from '@/app/styles/Cart.module.css';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import { ButtonTypes } from '../types/ButtonTypes';
import { CartContext } from '../contexts/CartContext';
import { CartActionType } from '../types/CartTypes';
import CartItem from './CartItem';

export default function Cart() {
  const { cartState, dispatch } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuRef = useRef<any>();

  useEffect(() => {
    if (!menuOpen) return;

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

  const getCartItemCount = () => {
    const keys = Object.keys(cartState);
    const subCount = keys.map((product) => cartState[product].quantity);
    const count = subCount.reduce((total, subtotal) => total + subtotal, 0);
    return count;
  };

  const getCartTotal = () => {
    const keys = Object.keys(cartState);
    const subTotals = keys.map(
      (product) => cartState[product].quantity * cartState[product].price
    );
    const total = subTotals.reduce((total, subtotal) => total + subtotal, 0);
    return total;
  };

  return (
    <>
      <button className={cartStyles.menuButton} onClick={() => toggleMenu()}>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.41142 13.1946H7.41037C7.03959 13.1955 6.73829 13.491 6.73829 13.8542C6.73829 14.2179 7.04064 14.5139 7.41212 14.5139H19.6309C20.0031 14.5139 20.3047 14.8092 20.3047 15.1736C20.3047 15.538 20.0031 15.8333 19.6309 15.8333H18.4821H8.625H7.41212C6.2975 15.8333 5.39063 14.9455 5.39063 13.8542C5.39063 13.0421 5.89302 12.343 6.60914 12.0382L4.17634 1.31944H0.673829C0.301644 1.31944 0 1.02412 0 0.659722C0 0.295329 0.301644 0 0.673829 0H4.7168C5.03266 0 5.30605 0.214753 5.37467 0.516611L5.85635 2.63889H22.3262C22.5377 2.63889 22.7368 2.73613 22.8642 2.9014C22.9914 3.06668 23.0322 3.28074 22.9741 3.47986L20.2788 12.716C20.1961 12.9991 19.9317 13.1944 19.6309 13.1944H7.41405L7.41142 13.1946ZM8.625 15.8333C9.75732 15.8333 10.6786 16.7679 10.6786 17.9167C10.6786 19.0654 9.75732 20 8.625 20C7.49268 20 6.57143 19.0654 6.57143 17.9167C6.57143 16.7679 7.49268 15.8333 8.625 15.8333ZM18.4821 15.8333C19.6145 15.8333 20.5357 16.7679 20.5357 17.9167C20.5357 19.0654 19.6145 20 18.4821 20C17.3498 20 16.4286 19.0654 16.4286 17.9167C16.4286 16.7679 17.3498 15.8333 18.4821 15.8333ZM19.1225 11.875L21.4329 3.95833H6.15571L7.95259 11.875H19.1225ZM9.30952 17.9167C9.30952 17.5338 9.00238 17.2222 8.625 17.2222C8.24762 17.2222 7.94048 17.5338 7.94048 17.9167C7.94048 18.2995 8.24762 18.6111 8.625 18.6111C9.00238 18.6111 9.30952 18.2995 9.30952 17.9167ZM18.4821 17.2222C18.8595 17.2222 19.1667 17.5338 19.1667 17.9167C19.1667 18.2995 18.8595 18.6111 18.4821 18.6111C18.1048 18.6111 17.7976 18.2995 17.7976 17.9167C17.7976 17.5338 18.1048 17.2222 18.4821 17.2222Z"
            fill="white"
          />
        </svg>
      </button>
      {Object.keys(cartState).length > 0 && (
        <motion.div
          className={cartStyles.menuButtonCounter}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {getCartItemCount() <= 10 ? getCartItemCount() : '10+'}
        </motion.div>
      )}

      <AnimatePresence key={'cartMenu'}>
        {menuOpen && (
          <motion.div
            className={cartStyles.cartMenu}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            ref={menuRef}
          >
            <div className={cartStyles.textTop}>
              <h2>Cart ({getCartItemCount()})</h2>
              {Object.keys(cartState).length !== 0 && (
                <button
                  onClick={() =>
                    dispatch({
                      type: CartActionType.empty_cart,
                      productName: '',
                      productImageUrl: '',
                      quantity: 0,
                      price: 0,
                    })
                  }
                >
                  Remove all
                </button>
              )}
            </div>
            <div className={cartStyles.cartContent}>
              {' '}
              {Object.keys(cartState).length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                Object.keys(cartState).map((product) => (
                  <CartItem
                    key={product}
                    imageUrl={cartState[product].productImageUrl}
                    productName={product}
                    productPrice={cartState[product].price}
                    quantity={cartState[product].quantity}
                    decreaseCartQuantity={() =>
                      dispatch({
                        type: CartActionType.decrease_quantity,
                        productName: product,
                        productImageUrl: '',
                        quantity: 0,
                        price: 0,
                      })
                    }
                    increaseCartQuantity={() =>
                      dispatch({
                        type: CartActionType.increase_quantity,
                        productName: product,
                        productImageUrl: '',
                        quantity: 0,
                        price: 0,
                      })
                    }
                    removeItem={() =>
                      dispatch({
                        type: CartActionType.remove_item,
                        productName: product,
                        productImageUrl: '',
                        quantity: 0,
                        price: 0,
                      })
                    }
                  />
                ))
              )}
            </div>
            {Object.keys(cartState).length !== 0 && (
              <>
                <div className={cartStyles.textCartTotal}>
                  <h2>Total</h2>
                  <p>€ {getCartTotal().toLocaleString('nl')}</p>
                </div>
                <Button
                  type={ButtonTypes.defaultFullWidth}
                  text="Checkout"
                  onClick={undefined}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {menuOpen &&
        createPortal(
          <div className={cartStyles.cartMenuBackground}></div>,
          document.body
        )}
    </>
  );
}
