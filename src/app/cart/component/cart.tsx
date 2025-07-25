"use client";
import React from "react";

const Cart = () => {
  const items = localStorage.getItem("sample-cart");

  console.log("items", items);

  const cartITems = JSON.parse(JSON.stringify(items));
  console.log("object", JSON.parse(JSON.stringify(items)));
  return (
    <div>
      {cartITems?.map((item, index) => {
        <p>{item.name}</p>;
      })}
    </div>
  );
};

export default Cart;
