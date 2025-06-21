import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import Pic1 from "../../Images/Pic1.jpg";
import Footer from "../../Components/Footer";

const Cart = (props) => {
  // const handleSendClick = () => {
  //   let ProductList = state.CartList;
  //   let ProductMessage = "Hello, I would like to purchase the following item(s):\n\n";
  
  //   ProductList.map((item) => {
  //     ProductMessage +=
  //       `- Product: ${item.name}\n` +
  //       `  Quantity: ${item.Qty}\n` +
  //       `  Size: ${item.size?item.size.size:""}\n` +
  //       `  Color: ${item.color?item.color.name:""}\n` +
  //       `  URL: ${item.url}\n\n`;
  //   });
  
  //   let PricingMessage = `Total Price: ${state.TotalAmount}\n\n`;
  
  //   const websiteUrl = "http://localhost:3000/";
  //   let message = `${ProductMessage}${PricingMessage}Thank you for your order! \n We will get back to you as soon as possible. \n You can view more products on our website: ${websiteUrl}`;
  
  //   const phoneNumber = "+91 9645557237";
  //   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
  //     message
  //   )}`;
  
  //   // Use window.location.href instead of window.open
  //   // window.location.href = whatsappUrl;
  //   window.open(whatsappUrl);
  // };
  const handleSendClick = () => {
    let ProductList = state.CartList;
    let ProductMessage = "Hello, I would like to purchase the following item(s):\n\n";
  
    ProductList.forEach((item) => {
      ProductMessage +=
        `- Product: ${item.name}\n` +
        `  Quantity: ${item.Qty}\n` +
        `  Size: ${item.size ? item.size.size : ""}\n` +
        `  Color: ${item.color ? item.color.name : ""}\n` +
        `  URL: ${item.url}\n\n`;
    });
  
    let PricingMessage = `Total Price: ${state.TotalAmount}\n\n`;
  
    const websiteUrl = "http://localhost:3000/";
    let message = `${ProductMessage}${PricingMessage}Thank you for your order! \n We will get back to you as soon as possible. \n You can view more products on our website: ${websiteUrl}`;
  
    const phoneNumber = "+919497849285";
    const apiEndpoint = "https://api.whatsapp.com/send";
    const whatsappUrl = `${apiEndpoint}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl);
  };



  const [state, setState] = useState({
    CartList: [],
    TotalItems: 0,
    SubTotal: 0,
    TotalAmount: 0,
    calculate: false,
  });
  //Taking value from local storage
  useEffect(() => {
    const getData = () => {
      const CartList = JSON.parse(localStorage.getItem("CartList")) || [];
      setState((prev) => {
        return { ...prev, CartList, calculate: true };
      });
    };
    getData();
  }, []);

  const Calculation = () => {
    console.log("*************************");
    let CartList = state.CartList;
    let SubTotal = 0;
    let TotalItems = CartList ? CartList.length : null;
    CartList.map((item) => {
      let price = item.price;
      let Qty = item.Qty;
      SubTotal = SubTotal + Qty * price;
    });

    let TotalAmount = SubTotal;
    setState((prev) => {
      return { ...prev, SubTotal, TotalItems, TotalAmount, calculate: false };
    });
  };

  const ChangeQty = (value, index) => {
    // if (Number(value) >= 0 && value && value !== "0" && value !== "") {
      let CartList = state.CartList;
      CartList[index]["Qty"] = value;
      CartList[index]["amount"] =
        CartList[index]["price"] * CartList[index]["Qty"];
      setState((prev) => {
        return { ...prev, CartList, calculate: true };
      });
    // }
  };

  const RemoveItem = (index) => {
    let CartList = state.CartList;
    const storedData = JSON.parse(localStorage.getItem('CartList')) || [];
    if (index >= 0 && index < storedData.length) {
      storedData.splice(index, 1);
      localStorage.setItem('CartList', JSON.stringify(storedData));
    } else {
      console.error('Invalid index specified for removal.');
    }

    CartList.splice(index, 1);
    setState((prev) => {
      return { ...prev, CartList, calculate: true };
    });
  };

  useEffect(() => {
    console.log("1111111111111", state.calculate);
    if (state.calculate === true) {
      Calculation();
    }
  }, [state.CartList, state.calculate]);

  const goToHomePage = () => {
    window.location.href = "/product";
  };

  // let subtotal = 0;
  // props.products.map((product) => (subtotal += product.price));
  console.log(state, "~~~state");
  return (
    <>
      <div className="container mt-2" style={{height:"calc(100vh - 190px)",maxWidth:"100vw"}}>
        <h2 className="mb-5 text-center">Shopping Cart</h2>

        <div className="row">
          <div className="col-12 col-lg-7" style={{maxHeight:"500px",overflowY:"scroll"}}>
            {state.CartList.map((product, i) => (
              <>
                {i !== 0 && <hr className="horizontal dark my-4" />}
                <CartItem
                  product={product}
                  setState={setState}
                  ChangeQty={ChangeQty}
                  index={i}
                  RemoveItem={RemoveItem}
                />
              </>
            ))}

            {!state.CartList || state.CartList.length <= 0 ? (
              <p style={{textAlign:"center"}}>Your cart is empty</p>
            ) : null}
          </div>
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="card shadow-xs border bg-gray-100">
              <div className="card-body p-lg-5">
                <h5 className="mb-4">Order Summary</h5>
                <OrderSummary state={state} textColor={"dark"} />
                <button
                  className="btn btn-dark btn-lg w-100"
                  style={{ backgroundColor: "#128c7e", border: "none" }}
                  onClick={(e) => handleSendClick(e)}
                >
                  Order Via WhatsApp
                </button>
                <button
                  className="btn btn-white btn-lg w-100"
                  onClick={() => goToHomePage()}
                >
                  Continue Shopping
                </button>
                <p className="text-center">
                 Shipping calculated at checkout.
                </p>
                <p className="text-center">
                Refund not available,you can exchange products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default Cart;
