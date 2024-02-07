import { useAppDispatch } from "../hooks";

import { ChevronDown, ChevronUp } from "../icons";
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/cartSlice";

export default function CartItem(item) {
  const dispatch = useAppDispatch();

  return (
    <article className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h4 className="item-price">${item.price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseAmount(item.id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{item.amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (item.amount === 1) {
              dispatch(removeItem(item.id));
            }
            dispatch(decreaseAmount(item.id));
          }}
          disabled={item.amount <= 0}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
