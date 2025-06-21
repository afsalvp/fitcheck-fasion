import { useState } from "react";
import OrderCard from "./OrderCard";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Orders = (props) => {
  const [state,setState]=useState({
    full_description:"The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
    products: [
      {
        id: "01",
        thumb_src: "/images/suit-3.jpg",
        thumb_alt: "watch-image",
        images: [
          {
            src: "https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "first_image"
          },
          {
            src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            alt: "second_image"
          },
          {
            src: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            alt: "third_image"
          },
          {
            src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            alt: "fourth_image"
          }
        ],
        color: "8 colors",
        colors: [
          "red", 
          "blue", 
          "green"
        ],
        title: "Basic Starter Pack",
        price: 399,
        description: "Thats the main thing people are controlled by! Thoughts- their perception of themselves!",
        full_description: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
        details: "Theres nothing I really wanted to do in life that I wasnt able to get good at. Thats my skill. Im not really specifically talented at anything except for the ability to learn.",
        highlights: [
          "Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.",
          "Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics",
          "Oil is a crucial source of petrochemicals, which are used in the production of plastics."
        ],
        features: [
          "Multiple strap configuration",
          "Water Resistant",
          "Stainless strap loops",
          "Ultra-soft 100% cotton"
        ],
        rating: 4,
        reviews: 117,
        size: "Small",
        sizes: {
          XS: 3,
          S: 0,
          M: 1,
          L: 1213,
          XL: 6
        },
        data: {
          Features: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.",
          Care: "It really matters and then like it really doesn`t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn`t matter. Because it's about motivating the doers. Because I`m here to follow my dreams and inspire other people to follow their dreams, too.",
          Shipping: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
          Returns: "I always felt like I could do anything. That`s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can`t do anything, you won`t do anything. I was taught I could do everything."
        },
        featuresDetails: {
          Origin: "Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.",
          Material: "Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics.",
          Dimensions: "Oil is a crucial source of petrochemicals, which are used in the production of plastics."
        },
        stock: true
      },
      
    ],
  })
  return (
  <>
    <Navbar/>
    <div class="my-1" style={{height:"calc(100vh - 160px)"}}>
    <OrderCard products = {state.products}/>
    </div>
    <Footer />
    </>
  );
};

  export default Orders;
