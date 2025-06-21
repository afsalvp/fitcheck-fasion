import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Logo from "../../Images/Logo.png";
import "./About.css";
const AboutUs = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar is_page={"about"} />

      <div className="container mt-5">
        <div className="text-center">
          <img className="w-25 mb-4 rounded" src={Logo} alt="Fad Slang Logo" />
          <h2 className="text-4xl font-bold">Fad Slang</h2>
          <span className="block text-muted mb-4">
            Embrace The Extra Ordinary
          </span>
          <p className="text-lg">
            Everyone loves customization. But, what if customization works
            within the budget. Yes, Fad slang weaves your dream styles
            affordably.
          </p>
          <span className="block text-muted mb-4">Phn: +91 9645557237</span>
          <br />
          <span className="block text-muted mb-4">Place: Calicut</span>

          <div
            className="desktop-view"
            style={{
              marginTop: "30px",
            }}
          >
            <p className="text-lg">What’s new and exciting here?</p>

            <ul className="">
              <li className="mb-1" style={{ textAlign: "left" }}>
                We are 24*7 at your service in all our upcoming outlets at
                Calicut, Erode, and Ernakulam.
              </li>
              <li className="mb-1" style={{ textAlign: "left" }}>
                Customization services that match your ideas.
              </li>
              <li className="mb-1" style={{ textAlign: "left" }}>
                Quality products available in ₹99 - ₹999.
              </li>
              <li className="mb-1" style={{ textAlign: "left" }}>
                Premium western, indowestern clothes, Korean styles, and all
                types of uniforms available at wholesale and retail prices.
              </li>
              <li className="mb-1" style={{ textAlign: "left" }}>
                Single and bulk orders accepted.
              </li>
            </ul>
          </div>

        
          {/* <div
            className="desktop-view"
            style={{
              marginTop: "30px",
            }}
          >
            <p className="text-lg" style={{textAlign:"left"}}>
              We are known for customizing outfit colors ,design and patterns
              specifically for:
            </p>

            <ul className="">
              <li className="mb-1" style={{ textAlign: "left" }}>
                Event management uniforms
              </li>
              <li className="mb-1" style={{ textAlign: "left" }}>
                Bulk orders for wedding and party outfits
              </li>
              <li className="mb-1" style={{ textAlign: "left" }}>
                All types of uniforms
              </li>
            </ul>
          </div> */}

          {/* <p className="text-lg mb-5 mt-5">Why wait? Order now!</p> */}

        </div>
      </div>
    </>
  );
};

export default AboutUs;
