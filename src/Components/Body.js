import ResCard, {withPromotedLabel} from "./ResCard";
// import { resList } from "../../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchFilteredRestaurants, setSearchFilteredRestaurants] = useState([]);

  const [searchRestaurant, setSearchRestaurant] = useState("");

  const ResCardPromoted = withPromotedLabel(ResCard)

  useEffect(() => {
    fetchData();
  }, []);


  const searchRestaurantHandler = () => {
    const filteredRestaurants = listOfRestaurants?.filter((res) => {return res?.info?.name?.toLowerCase()?.includes(searchRestaurant?.toLowerCase())});
    setSearchFilteredRestaurants(filteredRestaurants);
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9767235&lng=81.79386199999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[0 || 1|| 2|| 3 || 4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    console.log(json?.data?.cards[0 || 1|| 2|| 3 || 4]?.card?.card?.gridElements?.infoWithStyle?.restaurants, searchFilteredRestaurants,"restaurants");
    setSearchFilteredRestaurants(
    json?.data?.cards[0 || 1|| 2|| 3 || 4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants,
  );
  };

  const filteredList = listOfRestaurants?.filter(
    (res) => res?.info?.avgRating > 4.5,
  );

  return (
    (listOfRestaurants?.length ===
    0 ) ? <Shimmer /> : (
      <div className="body">
        <div className="search-filter">
          <div className="search">
            <input type="text" placeholder="Search for restaurants" value={searchRestaurant} onChange={(e) => setSearchRestaurant(e.target.value)}/>
          <button onClick={searchRestaurantHandler}>Search</button>
          </div>
          <div>
          {console.log(listOfRestaurants, "list of restaurants")}
          <button
            className="top-rated-btn"
            onClick={() => setListOfRestaurants(filteredList)}
          >
            Top Rated Restaurants
          </button>
          </div>
        </div>
        <div className="res-container">
          {searchFilteredRestaurants?.map((card, id) => {
            console.log(card, "vamsy");

            return card?.info?.isOpen ? <ResCardPromoted name={card?.info?.name}
                key={id}
                cloudinaryImageId={card?.info?.cloudinaryImageId}
                cuisines={card?.info?.cuisines}
                costForTwo={card?.info?.costForTwo}
                avgRatingString={card?.info?.avgRatingString}/> : (
              <ResCard
                name={card?.info?.name}
                key={id}
                cloudinaryImageId={card?.info?.cloudinaryImageId}
                cuisines={card?.info?.cuisines}
                costForTwo={card?.info?.costForTwo}
                avgRatingString={card?.info?.avgRatingString}
              />
            );
          })}
        </div>
      </div>,
    )
  );
};

export default Body;
