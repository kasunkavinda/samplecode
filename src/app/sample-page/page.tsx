import { getCloneableBody } from "next/dist/server/body-streams";
import React from "react";
import ProductBox from "./component/productBox";

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
const SamplePage = () => {
  return (
    <div>
      <ProductBox />
      {/* // cart page */}
      {/* <div>
        <button onClick={() => setNumberOfItems(numberOfItems - 1)}>-</button>
        <p>{numberOfItems}</p>
        <button onClick={() => setNumberOfItems(numberOfItems + 1)}>+</button>

        <button onClick={handleDelete}>Delete</button>
      </div> */}
    </div>
  );
};

export default SamplePage;
