'use client';

import React, { ReactNode, createContext, useReducer } from 'react';
import { Cart, CartAction, CartActionType } from '../types/CartTypes';

const reducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case CartActionType.add_item: {
      if (Object.keys(state).includes(action.productName)) {
        return {
          ...state,
          [action.productName]: {
            ...state[action.productName],
            quantity: state[action.productName].quantity + action.quantity,
          },
        };
      }

      return {
        ...state,
        [action.productName]: {
          productImageUrl: action.productImageUrl,
          quantity: action.quantity,
          price: action.price,
        },
      };
    }

    case CartActionType.remove_item: {
      const newState = { ...state };
      delete newState[action.productName];
      return newState;
    }

    case CartActionType.increase_quantity: {
      if (Object.keys(state).includes(action.productName)) {
        return {
          ...state,
          [action.productName]: {
            ...state[action.productName],
            quantity: state[action.productName].quantity + 1,
          },
        };
      }

      return state;
    }

    case CartActionType.decrease_quantity: {
      if (
        Object.keys(state).includes(action.productName) &&
        state[action.productName].quantity > 0
      ) {
        return {
          ...state,
          [action.productName]: {
            ...state[action.productName],
            quantity: state[action.productName].quantity - 1,
          },
        };
      }

      return state;
    }

    case CartActionType.empty_cart: {
      return {};
    }

    default:
      throw new Error('Action not supported.');
  }
};

export const CartContext = createContext<{
  cartState: Cart;
  dispatch: React.Dispatch<CartAction>;
}>({ cartState: {}, dispatch: () => null });

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartState, dispatch] = useReducer(reducer, {});

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
