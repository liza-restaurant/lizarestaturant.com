import { useLocation } from "react-router-dom";
import Header from "../components/Header";
// import Cart from "../components/Cart";
// import Button from "../components/Button";
// import { useContext } from "react";
// import DataContext from "../contexts/DataContext";
import Image from "../components/Image";
import { formatNumber } from "../utils";

function ViewProduct(props) {
  // const { setCart, cart } = useContext(DataContext);
  const {
    state: { item },
  } = useLocation();
  return (
    <>
      <div className="p-image">
        <Image src={item.image} alt={item.name} />
        <div className="content">
          <Header transparent />
        </div>
      </div>

      <div className="item-details">
        <div className="container mobile-column flex justify-between">
          <div className="item-preview">
            <span>Name: </span>
            <h3>{item.name}</h3>
            <br />
            <span>Description: </span>
            <h3>{item.description}</h3>
            <br />
            <span>Price: </span>
            <h3>{formatNumber(item.price)}</h3>
            {/* {!cart.find((c) => c.id === item.id) && (
              <Button
                onClick={() => setCart([{ ...item, quantity: 1 }, ...cart])}
                title="Add to Cart"
                width={200}
              />
            )} */}
          </div>
          {/* <Cart /> */}
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
