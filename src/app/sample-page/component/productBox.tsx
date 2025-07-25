"use client";

import React, { useState } from "react";

const inventory = [
  { name: "bacon", unitPrice: 10.99, quantity: 10 },
  { name: "eggs", unitPrice: 3.99, quantity: 10 },
  { name: "cheese", unitPrice: 6.99, quantity: 10 },
  { name: "chives", unitPrice: 1.0, quantity: 10 },
  { name: "wine", unitPrice: 11.99, quantity: 10 },
  { name: "brandy", unitPrice: 17.55, quantity: 10 },
  { name: "bananas", unitPrice: 0.69, quantity: 10 },
  { name: "ham", unitPrice: 2.69, quantity: 10 },
  { name: "tomatoes", unitPrice: 3.26, quantity: 10 },
  { name: "tissue", unitPrice: 8.45, quantity: 10 },
];
const ProductBox = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const handleAddtoCart = (item: any) => {
    console.log(item);

    // const itemBody = JSON.stringify(item);
    // console.log(itemBody);
    localStorage.setItem("sample-cart", item);
  };
  return (
    <div>
      <div>
        {inventory.map((item: any, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.unitPrice}</p>
              <p>{item.quantity}</p>
              <button onClick={() => handleAddtoCart(item)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductBox;
