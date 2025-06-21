import React from 'react';
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '1px', textAlign: 'center' }}>
      <p style={{marginBottom:"0"}}>&copy; 2024 Fad Slang. All rights reserved. | <span style={{cursor:"pointer"}} onClick={()=>{navigate("/privacy-policy")}}>Privacy Policy</span></p>
      {/* <a  > */}
          {/* <p onClick={()=>{navigate("/privacy-policy")}} style={{textAlign:"center",color:"blue",cursor:"pointer"}}>privacy policy</p> */}

          {/* </a> */}
    </footer>
  );
};

export default Footer;
