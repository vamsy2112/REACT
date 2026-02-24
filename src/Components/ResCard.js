const ResCard = (props) => {
  // console.log(props.card, "vamsy");
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRatingString } =
    props;
  return (
    <div className="res-card">
      <img
        className="res-card-logo"
        src={
          `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
          cloudinaryImageId
        }
      />
      <h2 className="res-name">{name}</h2>
      <h3 className="res-cuisines">{cuisines?.join(", ")}</h3>
      <h4 className="res-priceForTwo">{costForTwo}</h4>

      <h5 className="res-rating">{avgRatingString} ⭐️</h5>
    </div>
  );
};

export default ResCard;
