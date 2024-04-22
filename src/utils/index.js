import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img14 from "../assets/14.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import tea from "../assets/tea.png";
import pizza from "../assets/pizza.png";
import seafood from "../assets/seafood.png";
import spaghetti from "../assets/spaghetti.png";
import menu from "../assets/menu.png";

export const images = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img14,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img9,
  },
  {
    image: img10,
  },
  {
    image: img11,
  },
  {
    image: img12,
  },
];

export const formatNumber = (n, pre = "₦") =>
  (pre || "") + n?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const themes = { light: "light", dark: "dark" };

export const menus = [
  {
    title: "All Menu",
    className: "all",
    icon: menu,
  },
  {
    title: "Tea",
    icon: tea,
    data: [
      {
        image:
          "https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Lemon Slice",
        name: "Lemon Tea",
      },
      {
        name: "Turkish Coffee",
        description: "Arabic",
        image:
          "https://images.pexels.com/photos/15658677/pexels-photo-15658677/free-photo-of-tea-in-a-glass-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Nescafe",
        description: "Instant Coffee",
        image:
          "https://images.pexels.com/photos/2013749/pexels-photo-2013749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Mint Tea",
        description: "with Mint Leave",
        image:
          "https://images.pexels.com/photos/259955/pexels-photo-259955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Cappuccino",
        description: "Coffee Shake",
        image:
          "https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Argili Shisha",
        description: "Arabic Filtered Tobacco",
        image:
          "https://images.pexels.com/photos/4411547/pexels-photo-4411547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Green Tea",
        description: "Green Tea",
        image:
          "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
  //   {
  //     title: "Beer",
  //     data: [],
  //   },
  {
    title: "Pasta",
    icon: spaghetti,
    data: [
      {
        name: "Penne Arabiata",
        description:
          "Penne Pasta, Tomato Sause, Pepperonica, Garlic Olive Oil, Basil, Parmesan Cheese",
        image:
          "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Pettuccini Alfredo",
        description:
          "Eglith Fottuccini Pasta, White Creaming Sauce, Chicken Breast, Mushrooms, Parmesan Chees",
        image:
          "https://images.pexels.com/photos/11220208/pexels-photo-11220208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Sea Food Spaghetti",
        description:
          "Spaghetti, Garlic, Olive Oil, Basil Cherry Tomatoes Permesan Cheese, Calamars, Fish, Shrimps",
        image:
          "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Shrimps Pesto Tagliatell",
        description: "Tagliatelle Pasta, Pesto, Sauce, Shrimps Parmesan Cheese",
        image:
          "https://images.pexels.com/photos/5604813/pexels-photo-5604813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Chicken Spaghetti",
        description: "Shredded, Chicken, Vegetable",
        image:
          "https://images.pexels.com/photos/9814654/pexels-photo-9814654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        name: "Spaghetti: Bolognaise (Chinese)",
        description: "Minced Meat, Tomatoes Sauces, Onion, Garlic",
        image:
          "https://images.pexels.com/photos/4349774/pexels-photo-4349774.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  {
    title: "Pizza",
    icon: pizza,
    data: [
      {
        image:
          "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Tomato Sauce Mozzarella Cheese, Basil",
        name: "Magharita Pizza",
      },
      {
        image:
          "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Tomato Sauce Mozzarella Cheese, Sausage Mushroom-olives",
        name: "Traditional Pizza",
      },
      {
        name: "Vegetarian Pizza",
        description:
          "Tomato Sauce Mozzarella Cheese, Onions, Green Pepper, Red Pepper, Fresh Mushroom Silvet Corn, Olive",
        image:
          "https://images.pexels.com/photos/5419314/pexels-photo-5419314.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Pepperoni Pizza",
        description: "Tomato Sauce, Cheese, Pepperoni",
        image:
          "https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Chicken Pizza",
        description: "Tomato Sauce, Cheese, Tomatoes Chicken, Basil",
        image:
          "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Sea Food Pizza",
        description: "Tomato Sauce, Cheese, Calamar Fish, Shrimps",
        image:
          "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  {
    title: "Sea Food",
    icon: seafood,
    data: [
      {
        name: "Fish/Chip",
        description: "Fried Crispy Fish Fillet, French Fried, Tartar Sauce",
        image:
          "https://images.pexels.com/photos/10549666/pexels-photo-10549666.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Grilled Fish Fillet",
        description: "Fillet Fish, Potatoes, Fresh Green Salad",
        image:
          "https://images.pexels.com/photos/7627414/pexels-photo-7627414.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Prawns Arabiata",
        description: "Roasted Prawns, Spicy Tomato Sauce, Paramesans Cheese",
        image:
          "https://images.pexels.com/photos/5041500/pexels-photo-5041500.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      },
      {
        name: "Grilled Fish",
        description:
          "Fried Fish, Onion, Tomatoes, Green Pepper, Served with LIZA Sauce, Chips or Rice",
        image:
          "https://images.pexels.com/photos/8964280/pexels-photo-8964280.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        name: "Fish Pane",
        description: "Bread Fish, Served with Lemon Sauce",
        image:
          "https://images.pexels.com/photos/7474368/pexels-photo-7474368.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  //   {
  //     title: "Staters",
  //     data: [],
  //   },
  //   {
  //     title: "Fresh Juice",
  //     data: [],
  //   },
  //   {
  //     title: "Hot Sandwiches",
  //     data: [],
  //   },
  //   {
  //     title: "Tuna Sandwiches",
  //     data: [],
  //   },
  //   {
  //     title: "Beverages Drinks",
  //     data: [],
  //   },
];
