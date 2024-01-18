import React from "react";
import "./tp_item.css";
const TpItem = ({ item }) => {
  return (
    <div>
      <div className="tp-item-cover">
        <img src={item.cover} className="tp-item-image" alt={item.title} />
      </div>
      <div className={"tp-item-title"}>{item.title}</div>
    </div>
  );
};

export default TpItem;
