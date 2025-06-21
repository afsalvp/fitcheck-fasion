import { useState } from "react";

const OrderSummary = (props) => {
  let {state} =props
  let variant = ""
  if (props.textColor) {
    variant = ` text-${props.textColor}`;
  }
  return (
    <>
      <ul className="list-unstyled">
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Total Items</p>
            <p className={`fw-bold opacity-8` + variant}>{Number(state.TotalItems).toFixed(2).toLocaleString()}</p>
          </div>
        </li>
        <li className="mt-2">
          <div className="d-flex justify-content-between">
            <p className={`opacity-8` + variant}>Sub Total</p>
            <p className={`fw-bold opacity-8` + variant}>₹{Number(state.SubTotal).toFixed(2).toLocaleString()}</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5 className={variant}>Total</h5>
            <h5 className={variant}>₹{(Number(state.TotalAmount).toFixed(2)).toLocaleString()}</h5>
          </div>
        </li>
      </ul>
    </>
  );
};

  export default OrderSummary;
