import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

export default function CartContainer() {
  const { cartItems, total, amount } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear cart
        </button>
      </footer>
    </section>
  );
}
