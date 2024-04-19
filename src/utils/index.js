export const formatNumber = (n, pre = "₦") =>
  (pre || "") + n?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const menus = [
  {
    title: "Tea",
    data: [],
  },
  {
    title: "Beer",
    data: [],
  },
  {
    title: "Pizza",
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
    ],
  },
  {
    title: "Sea Food",
    data: [],
  },
  {
    title: "Staters",
    data: [],
  },
  {
    title: "Fresh Juice",
    data: [],
  },
  {
    title: "Hot Sandwiches",
    data: [],
  },
  {
    title: "Tuna Sandwiches",
    data: [],
  },
  {
    title: "Beverages Drinks",
    data: [],
  },
];
