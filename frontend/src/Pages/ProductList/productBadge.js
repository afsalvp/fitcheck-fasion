import React, { useState } from 'react';

function Badge({ color, isSelected, onClick,SelectedProduct,setSelectedProduct }) {
  const badgeStyle = {
    display: 'inline-block',
    padding: '15px 20px', // Increase the size as needed
    borderRadius: '8px', // Set the border-radius for rounded corners
    backgroundColor: color.name.toLowerCase(),
    color: 'white',
    border: isSelected ? color.name.toLowerCase()==="black"?'2px solid grey':'2px solid black' : 'grey solid 1px',
    cursor: 'pointer',
    marginRight:'10px'
  };

  return <div  style={badgeStyle} onClick={() => onClick(color)}></div>;
}

function ProductBadge(props) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleBadgeClick = (color) => {
    setSelectedProduct({...SelectedProduct,color:color})

    setSelectedColor(color);
  };

  const {SelectedProduct,setSelectedProduct} =props
  const colors = props.colors;

  return (
    <div>
      {colors.map((color, index) => (
        <Badge
          key={index}
          color={color}
          isSelected={selectedColor === color}
          onClick={handleBadgeClick}
          SelectedProduct={SelectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </div>
  );
}

export default ProductBadge;
