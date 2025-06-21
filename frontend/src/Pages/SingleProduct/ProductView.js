import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductAccordion from "./ProductAccordion";
import ProductBadge from "../ProductList/productBadge";
import SizeSelector from "./SizeSelector";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductView = (props) => {
  const { state, SelectedProduct, setSelectedProduct } = props;
  const navigate = useNavigate();

  const [IsCart, setIsCart] = useState(false);
  const [Error, SetError] = useState({
    name: null,
    ErrorMessage: null,
  });
  const validation = () => {
    // let name = null;
    // let ErrorMessage = null;
    // let IsError = false;
    // if (!SelectedProduct.size && !IsError) {
    //   IsError = true;
    //   ErrorMessage = "Please Select A Size";
    //   name = "size";
    // } else if (!SelectedProduct.color && !IsError) {
    //   IsError = true;
    //   ErrorMessage = "Please Select A Color";
    //   name = "color";
    // }

    // if (IsError) {
    //   SetError({
    //     name,
    //     ErrorMessage,
    //   });
    // }

    // return IsError;
    return false;
  };
  const onClickCart = async () => {
    let IsError = await validation();
    if (IsError === false) {
      SetError({
        name: null,
        ErrorMessage: null,
      });
      setIsCart(true);
      const existingCartList =
        JSON.parse(localStorage.getItem("CartList")) || [];
      const updatedCartList = [...existingCartList, SelectedProduct];
      localStorage.setItem("CartList", JSON.stringify(updatedCartList));
    }
  };
  console.log(SelectedProduct, "SelectedProduct", Error);
  const sizeID = Date.now();

  const descriptionsArray = state?.description
    ?.split(",")
    .map((item, index) => <li key={index}>{item.trim()}</li>);

  return (
    <>
      <div className="card card-product card-plain ">
        <div className="row d-flex justify-content-between">
          {state.images?.length !== 0 && (
            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <ProductImage images={state.images} />
            </div>
          )}
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            {state.name?.length !== 0 && (
              <h2
       
              >
                {state.name}
              </h2>
            )}
            {state.price?.length !== 0 && (
              <>
                <div className="d-flex mb-3">
                  <h4 className="font-weight-normal">
                    ₹
                    {state.price
                      ? Number(state.price).toFixed(2)?.toLocaleString()
                      : 0}
                  </h4>
                  <input className="opacity-0" defaultValue={state.price} />
                </div>
              </>
            )}
            {/* <p className="mt-4">{state.description}</p> */}
            <ul>{descriptionsArray}</ul>

            <div className="mt-4 d-flex me-4 justify-content-between align-items-center">
              <h6 className="mb-0">Size</h6>
            </div>
            <p style={{ color: "red" }}>
              {Error.name === "size" ? Error.ErrorMessage : null}
            </p>
            <div className="d-flex flex-wrap text-center my-4">
              {/* {Object.entries(state.sub_variants).map(([size, amount], i) => 

            <div className="mb-3 me-3">
              <div className="form-check">
                {(amount !== 0) ?
                  <input className="form-check-input  rounded-2" type="radio" name="flexRadioDefault" id={`input`+ sizeID + i} />
                : 
                  <input className="form-check-input rounded-2" disabled type="radio" name="flexRadioDefault" id={`input`+ sizeID + i} />
                } 
                <label className="cursor-pointer" htmlFor={`input`+ sizeID + i}>{size}</label>
              </div>
            </div>
            )} */}

              <SizeSelector
                sizes={state.sub_variants}
                SelectedProduct={SelectedProduct}
                setSelectedProduct={setSelectedProduct}
              />
            </div>

            {state.variants?.length !== 0 && (
              <>
                <h6 className="mt-4">Color:</h6>
                <p style={{ color: "red" }}>
                  {Error.name === "color" ? Error.ErrorMessage : null}
                </p>

                {state.variants && (
                  <ProductBadge
                    colors={state.variants}
                    SelectedProduct={SelectedProduct}
                    setSelectedProduct={setSelectedProduct}
                  />
                )}
              </>
            )}
       
            <div className="d-flex align-items-center mt-4">
              {IsCart ? (
                <>
                  <button
                    className="btn btn-success btn-lg mb-5 me-4"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    Go To Cart
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-dark btn-lg mb-5 me-4"
                  onClick={() => {
                    onClickCart();
                  }}
                >
                  Add to Cart
                </button>
              )}
              <a href="#favorite">
                <i id="heart1" className="far fa-heart text-2xl"></i>
              </a>
            </div>
            {/* <ProductAccordion data={props.data} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
