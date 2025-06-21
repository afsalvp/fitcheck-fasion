import { useState } from "react";
import BASE_URL from "../../settings";
import ProductBadge from "./productBadge";
import { useNavigate } from "react-router-dom";
import Pic4 from "../../Images/Pic4.jpg";
import { MediaURL } from "../../settings";

import "./ProductCardstyle.css";
const ProductCard = (props) => {
  const navigate = useNavigate();

  const classList = "card-body " + "text-" + "center";
  let { product } = props;

  // let image = MediaURL + product.images[0]["image"];
  let image = null
  if (product.images){
    if (product.images.length>0){
       image = MediaURL + product.images[0]["image"];
    }
  }
  return (
    <>
      <div className="product-card">
        <div
        
                onClick={() => {
                  navigate(`/product/view/${product.id}`);
                }}
          className="product-image"
          style={{ backgroundImage: `url(${image})` ,cursor: "pointer"}}
        ></div>
        <div className="product-details">
          <div
            className="producitem.colort-title"
            style={{
              maxWidth: "175px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/product/view/${product.id}`);
            }}
          >
            {product.name}
          </div>
          {/* <ProductBadge colors={product.ColourList} /> */}
          <div className="product-price">
            ₹{Number(product.price).toFixed(2)}
          </div>
          {/* <button className="cta-button">Add to Cart</button> */}
          {/* <a href="#" className="font-weight-normal text-body text-sm">Add To Cart</a> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
