import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { formatNumber } from "../utils";
import DataContext from "../contexts/DataContext";

const Counter = ({ onChange, increment, decrement, count }) => {
  return (
    <div className="counter flex align-center">
      <Button onClick={increment} title="+" />
      <span className="count">{count}</span>
      <Button onClick={decrement} disabled={!count} title="-" />
    </div>
  );
};

const Item = ({ item, updateCart }) => {
  const [count, setCount] = useState(item.quantity);
  const { price, name, description } = item;

  useEffect(() => {
    if (count <= 0) updateCart((c) => c.filter((_) => _.id !== item.id));
    else
      updateCart((c) =>
        c.map((_) => {
          if (_.id === item.id) _.quantity = count;
          return _;
        })
      );
  }, [count]);

  return (
    <tr>
      <td className="item-info">
        <span style={{ color: "var(--white)" }}>{name}</span>
        <span>{description}</span>
      </td>
      <td className="td-counter">
        <Counter
          decrement={() => setCount(count - 1)}
          count={count}
          increment={() => setCount(count + 1)}
        />
      </td>
      <td style={{ color: "var(--white)" }}>{formatNumber(price * count)}</td>
    </tr>
  );
};

function Cart(props) {
  const { cart, setCart } = useContext(DataContext);
  return (
    <div className="cart">
      <h2 className="cormorant">Your Order</h2>
      <table className="cart-table">
        {cart.map((c, idx) => (
          <Item updateCart={setCart} item={c} key={idx} />
        ))}
      </table>
      {!cart.length ? (
        <span className="empty-cart">your cart is empty :{"("}</span>
      ) : (
        <>
          <table className="pricing-table">
            <tr>
              <td>Tax</td>
              <td>{formatNumber(0)}</td>
            </tr>
            <tr>
              <td>Sub Total</td>
              <td>
                {formatNumber(
                  cart.reduce((p, c) => p + c.price * c.quantity, 0)
                )}
              </td>
            </tr>
            <tr>
              <td>Delivery Fee</td>
              <td>{formatNumber(1500)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                {formatNumber(
                  cart.reduce((p, c) => p + c.price * c.quantity, 0) + 1500
                )}
              </td>
            </tr>
          </table>
          <br />
          <Button title="Confirm Order" />
        </>
      )}
    </div>
  );
}

export default Cart;
