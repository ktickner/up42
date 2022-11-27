import * as React from "react";

import { cartReducer } from "./cart-context.reducer";

import type { State, Dispatch, CartProviderProps } from "./cart-context.types";

const CartContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState = { blocks: [], totalCost: 0 };

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
