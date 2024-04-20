import { useState } from "react";
import "../css/menus.css";
import { formatNumber, menus } from "../utils";
import useWindow from "../hooks/useWindow";

const Icon = () => {
  return <div className="icon flex justify-center align-center"></div>;
};

const Category = ({ title, onSelect, active = false }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex category align-center ${active ? "active" : ""}`}
    >
      <Icon />
      <span>{title}</span>
    </div>
  );
};

const Item = ({ name, image, description }) => {
  return (
    <div className="card">
      <div className="img-card">
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <span>{description}</span>
        <span className="price">
          {formatNumber((Math.random() * 10000).toFixed(0))}
        </span>
      </div>
    </div>
  );
};

function Menus(props) {
  const [menu, setMenu] = useState(menus[1].data);
  const { width } = useWindow();

  return (
    <div className="container flex mobile-column">
      <div className="categories">
        {(width < 768 ? menus : menus.slice(1)).map((m, idx) => (
          <Category
            active={menu === m.data}
            onSelect={() => setMenu(m.data)}
            key={idx}
            title={m.title}
          />
        ))}
      </div>
      <div className="items">
        <div className="list flex">
          {menu?.map((a, idx) => (
            <Item
              key={idx}
              image={a.image}
              description={a.description}
              name={a.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menus;
