import { useState } from "react";
import {BASE_URL} from "../../settings";

const CartItem = (props) => {

  return (
    <>
      <div className="d-flex d-md-flex">
        <img className="w-50 w-md-30 rounded-3 img-fluid " style={{maxWidth:"30%"}} src={`${BASE_URL}${props.thumb_src}`} alt={props.thumb_alt} />
        <div className="w-100 w-md-50 ps-2 ps-md-4">
          <h6 className="text-md md-text-lg mb-1">{props.title}</h6>
          <div className="d-block d-sm-flex">
            <p className="pe-3 mb-0">{props.color}</p>
            <p className="border-start ps-sm-3 mb-0">{props.size}</p>
          </div>
          <div className="d-block d-md-flex align-items-center mt-2 md-mt-6">
           {(props.stock) ? 
            <>
              <i className="fas fa-check text-lg text-success"></i>
              <p className="mb-0 ms-2 text-sm">In Stock</p>
            </>
            :
            <>
              <i className="fas fa-minus-circle text-lg"></i>
              <p className="mb-0 ms-2 text-sm">Out of Stock</p>
            </>
           }
          </div>
        </div>
        <div>
          <div className="w-100 w-md-50 mt-4 mt-md-0 mr-md-10">
            <input type="number" min={0} className="form-control" placeholder="1" aria-label="amount" />
          </div>
          <h4 className="ms-3">${props.price.toLocaleString()}</h4>
          <h4 className="ms-3">Pending</h4>
        </div>
        {/* <div className="w-10 text-end">
          <a href="#">
            <i className="fas fa-times ms-3"></i>
          </a>
        </div> */}
      </div>
    </>
  );
};

  export default CartItem;
