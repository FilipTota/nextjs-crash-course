// "use client"; // --> with this we tell our code to use/include this file or this component to a js bundle (which will be sent to client side)
// this is one way, but there is a better way, to make our applications faster and more search engine friendly we want to render our components on the server as much as possible and use client components only when absolutely necessary
// code example bellow: we moved button to new file to define it on the client side
import React from "react";
import AddToCart from "./AddToCart";
// import styles from "./ProductCard.module.css";

// server components cannot have interactivity
// they cannot handle browser events like click, change...
// which means that we get an error if we try to handle onClick event inside ProductCard (because this ProductCard component is in server side)

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
