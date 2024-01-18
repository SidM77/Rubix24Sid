import React from "react";
import "./explore_card.css";

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cft?.text;
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainer = restaurant?.bottomContainers;
  return (
    <div className={"explore-card cur-po"}>
      <div className={"explore-card-cover"}>
        <img src={coverImg} alt={name} className={"explore-card-image"} />
      </div>
      <div className={"res-row"}>
        <div className={"res-name"}>{name}</div>
        {rating && (
          <div className={"res-rating absolute-center"}>
            {rating}
            <img
              className="rating-star absolute-center"
              src={"https://cdn-icons-png.flaticon.com/512/149/149220.png"}
            />
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {item}
                  {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
            {approxPrice && <div className="approx-price">{approxPrice}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCard;
