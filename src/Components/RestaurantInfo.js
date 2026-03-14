import { useEffect } from "react";

const RestaurantInfo = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3201353&lng=80.419174&restaurantId=84810&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <h1>Name of the restuarant</h1>
      <h3>Menu</h3>

      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantInfo;
