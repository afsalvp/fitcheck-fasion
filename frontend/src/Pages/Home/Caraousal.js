import React from 'react';
import { Carousel } from 'react-bootstrap';
import HomeButton from './HomeButton';
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_BACKEND_URL, MediaURL } from "../../settings";
import './caraual.css'; // Import your CSS file

const Carausal = (props) => {
  const navigate = useNavigate();
  let CarousalImageList = props.CarousalImageList;

  console.log(CarousalImageList, "CarousalImageList");

  return (
    <Carousel className="custom-carousel">
      {CarousalImageList.map((item) => (
        <Carousel.Item key={item.id}>
          <img onClick={()=>{navigate("/product")}} className="d-block w-100" src={MediaURL + item.image} alt={`Slide ${item.id}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carausal;
