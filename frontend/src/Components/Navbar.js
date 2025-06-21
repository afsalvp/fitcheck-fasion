// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg blur border-radius-sm top-0 z-index-3 shadow position-sticky py-3 start-0 end-0">
//       <div className="container px-1">
//         <a className="navbar-brand font-weight-bolder ms-lg-0 " href="https://www.creative-tim.com/astro">Astro Ecommerce</a>
//         <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon mt-2">
//             <span className="navbar-toggler-bar bar1"></span>
//             <span className="navbar-toggler-bar bar2"></span>
//             <span className="navbar-toggler-bar bar3"></span>
//           </span>
//         </button>
//         <div className="collapse navbar-collapse" id="navigation">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="/astro-ecommerce/">
//                 All Components
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link text-dark dropdown-toggle font-weight-bold d-flex align-items-center me-2 " aria-current="page" id="pagesExample" data-bs-toggle="dropdown" aria-expanded="false">
//                 Pages
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="pagesExample">
//                 <li><a className="dropdown-item" href="/astro-ecommerce/landing/">Landing Page</a></li>
//                 <li><a className="dropdown-item" href="/astro-ecommerce/product/">Product Page</a></li>
//                 <li><a className="dropdown-item" href="/astro-ecommerce/shopping-cart/">Shopping Cart</a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://www.creative-tim.com/learning-lab/astro/overview/astro-ecommerce">
//                 Documentation
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://github.com/creativetimofficial/astro-ecommerce">
//                 <i className="fab text-lg fa-github"></i>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-dark font-weight-bold d-flex align-items-center me-2 " aria-current="page" href="https://discord.com/invite/TGZqBvZB" rel="nofollow" target="_blank">
//                 <i className="fab text-lg fa-discord"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import Logo from "../Images/Fad slang Light.svg";
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const MyNavbar = (props) => {
  const navigate = useNavigate();

  return (


    <div style={{position:"sticky",top:"0",overflow:"hidden",zIndex:'100'}}>

    <Navbar  bg="light" expand="lg">
      {/* Update the following line with the correct path to your logo */}
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <div className="ml-auto">
          <img
            src={Logo} // Update with the correct path to your logo file
            width="50"  // Increase the width of the logo
            height="50" // Increase the height of the logo
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </div>
        <div className="ml-2" style={{ fontSize: '1.5rem' }}> {/* Increase the font size */}
          Fad Slang
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <MenuIcon/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontSize: '1rem',marginLeft:"50px" }}>
          {props.is_page!=="home"?(
          <Nav.Link style={{ fontSize: '1rem'}} onClick={()=>{navigate("/home")}}>Home</Nav.Link>
          ):null}
          {props.is_page!=="about"?(
          <Nav.Link style={{ fontSize: '1rem' }} onClick={()=>{navigate("/about-us/")}}>About</Nav.Link>
          ):null}
          {props.is_page!=="about"?(
          <Nav.Link style={{ fontSize: '1rem' }} onClick={()=>{navigate("/about-us/")}}>Contact</Nav.Link>
          ):null}
          {props.is_page!=="cart"?(
          <Nav.Link style={{ fontSize: '1rem' }} onClick={()=>{navigate("/cart/")}}>Cart</Nav.Link>
          ):null}
          {/* <Nav.Link style={{ fontSize: '1rem' }} onClick={()=>{navigate("/cart/")}}>Orders</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default MyNavbar;



