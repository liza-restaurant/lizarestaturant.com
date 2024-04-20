import { useState } from "react";
import "../css/menus.css";
import { formatNumber, menus } from "../utils";
import useWindow from "../hooks/useWindow";
import { Link } from "react-router-dom";
import Header from "./Header";

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

const Item = ({ name, image, description, id, ...props }) => {
  const price = (Math.random() * 10000).toFixed(0);
  return (
    <Link
      to={`/menu/${id}`}
      state={{
        item: {
          ...props,
          name,
          image,
          description,
          price,
          id: (() => {
            let n = name;
            while (n.includes(" ")) n = n.replace(" ", "-");
            return n.toLowerCase();
          })(),
        },
      }}
      className="card"
    >
      <div className="img-card">
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <h4>{name}</h4>
        <span style={{ color: "var(--grey)" }}>{description}</span>
        <span className="price">{formatNumber(price)}</span>
      </div>
    </Link>
  );
};

function Menus(props) {
  const [menu, setMenu] = useState(menus[1].data);
  const { width } = useWindow();

  return (
    <>
      <Header />
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
                id={idx + 1}
                key={idx}
                image={a.image}
                description={a.description}
                name={a.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menus;
