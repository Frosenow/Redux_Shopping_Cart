import React from "react";

import { useAppSelector } from "../hooks";
import { CartIcon } from "../icons";

export default function Navbar() {
  const { amount } = useAppSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping Cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
