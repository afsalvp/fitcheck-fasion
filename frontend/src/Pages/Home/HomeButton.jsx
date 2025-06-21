// YourButton.jsx

import React from 'react';
import './HomeButtonStyle.css'; // Import your CSS file
import { KeyboardArrowRight } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const YourButton = () => {
  const navigate = useNavigate();

  return (


    <a onClick={()=>{navigate("/product")}} className="your-button">
      <KeyboardArrowRight className="icon-arrow before" />
      <span className="label">Check This Out</span>
      <KeyboardArrowRight className="icon-arrow after" />
    </a>
  );
};

export default YourButton;
