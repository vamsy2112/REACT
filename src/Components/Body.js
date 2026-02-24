import ResCard from "./ResCard";
import { resList } from "../../utils/constants";

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {resList?.map((card, id) => {
          console.log(card, "vamsy");
          return (
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
        {/* <ResCard name={resList} /> */}
      </div>
    </div>
  );
};

export default Body;
