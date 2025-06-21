import React, { useState } from 'react';

function SizeTag({ size,id, isSelected, onClick,setSelectedProduct,SelectedProduct }) {
  const sizeTagStyle = {
    display: 'inline-block',
    padding: '10px 10px', // Increase the size as needed
    borderRadius: '8px', // Set the border-radius for rounded corners
    backgroundColor: 'white',
    color: isSelected ? 'black' : 'grey',
    border: isSelected ? '2px solid black' : '1px solid grey',
    cursor: 'pointer',
    marginRight: '10px',
    minWidth: '50px', // Set the minimum width
    minHeight: '5px', // Set the minimum height
    marginTop:"10px"
  };

  return (
    <div style={sizeTagStyle} onClick={() => {
      setSelectedProduct({...SelectedProduct,size:{id:id,size:size}})
      onClick(size)}}>
      {size}
    </div>
  );
}

function SizeSelector(props) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const {sizes,SelectedProduct,setSelectedProduct} = props

  return (
    <div>
      {sizes.map((size, index) => (
        <SizeTag
          key={index}
          size={size.name}
          id={size.id}
          isSelected={selectedSize === size.name}
          onClick={handleSizeClick}
          setSelectedProduct={setSelectedProduct}
          SelectedProduct={SelectedProduct}
        />
      ))}
    </div>
  );
}

export default SizeSelector;
