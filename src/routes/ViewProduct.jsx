import { useLocation } from "react-router-dom";

function ViewProduct(props) {
  const {
    state: { item },
  } = useLocation();
  return (
    <div>
      <div className="p-image">
        <img src={item.image} alt={item.name} />
        <div className="content"></div>
      </div>
    </div>
  );
}

export default ViewProduct;
