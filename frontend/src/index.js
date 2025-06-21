// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />}>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'jquery/dist/jquery.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import AboutUs from './Pages/About/AboutUs';
import Orders from './Pages/Orders/Orders';
import PrivacyPolicy from './Pages/PrivacyPolicy/privacyPolicy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/product/" element={<ProductList />} />
        <Route path="/product/view/:unq_id" element={<SingleProduct />} />
        <Route path="/cart/" element={<ShoppingCart />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/order/" element={<Orders />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>  
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
