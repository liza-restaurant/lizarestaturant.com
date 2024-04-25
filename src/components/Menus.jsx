import { useContext, useEffect, useState } from "react";
import "../css/menus.css";
import { formatNumber, menus } from "../utils";
import useWindow from "../hooks/useWindow";
import { Link } from "react-router-dom";
import Header from "./Header";
import DataContext from "../contexts/DataContext";
import Image from "./Image";

const Icon = ({ img }) => {
  return (
    <div className="icon flex justify-center align-center">
      <Image src={img} />
    </div>
  );
};

const Category = ({ title, onSelect, icon, active = false }) => {
  return (
    <div
      onClick={onSelect}
      className={`flex category align-center ${active ? "active" : ""}`}
    >
      <Icon img={icon} />
      <span>{title}</span>
    </div>
  );
};

const Item = ({ name, image, description, price, id, ...props }) => {
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
        <Image src={image} alt={description} />
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
  const { categories, products } = useContext(DataContext);
  const [menu, setMenu] = useState(null);
  const { width } = useWindow();

  useEffect(() => {
    if (categories.length) setMenu(categories[0]._id);
  }, [categories]);

  return (
    <>
      <Header />
      <div className="container flex mobile-column">
        <div className="categories">
          {categories.map((m, idx) => (
            <Category
              icon={m.imageUrl}
              active={menu === m._id}
              onSelect={() => setMenu(m._id)}
              key={idx}
              title={m.name}
            />
          ))}
        </div>
        <div className="items">
          <div className="list flex">
            {products
              .filter((p) => p.category._id === menu)
              ?.map((a, idx) => (
                <Item
                  id={idx + 1}
                  key={idx}
                  image={a.imageUrl}
                  description={a.description}
                  name={a.name}
                  price={a.price}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menus;
