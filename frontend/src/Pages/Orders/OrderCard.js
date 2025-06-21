import { useState } from "react";
import CartItem from "./OrderItem";
// import OrderSummary from "./OrderSummary";
import Pic1 from "../../Images/Pic1.jpg"

const Cart = (props) => {
  const goToHomePage = () => {
    window.location.href = '/';

  };
  let subtotal = 0;
  props.products.map(product => 
    subtotal += product.price
  )

  return (
    <>
      <div className="container mt-2">
        <h2 className="mb-3 text-center">Your Orders</h2>
        <div className="col-12 col-lg-12">
          {props.products.map((product, i) => 
            <>
            {i !== 0 &&
              <hr className="horizontal dark my-4" />  
            }
              <CartItem
                thumb_src={Pic1}
                thumb_alt={product.thumb_alt}
                title={product.title}
                color={product.color}
                size={product.size}
                price={product.price}
                stock={product.stock}
              />
            </>
          )}
          
        </div>
      </div>
    </>
  );
};

  export default Cart;
