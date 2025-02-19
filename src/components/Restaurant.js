import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="cont-res">
      <h3>Restaurant Orders</h3>
      <ul className="order-list">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
