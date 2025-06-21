import React from "react";

function ReviewRating(props) {
  const { rating } = props;

  const ratingStar = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStar.push(
        React.createElement("svg", { className: "text-warning w-rem flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
          React.createElement("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", clipRule: "evenodd" })
        )
      );
    } else {
      ratingStar.push(
        React.createElement("svg", { className: "text-light w-rem flex-shrink-0", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
          React.createElement("path", { fillRule: "evenodd", d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z", clipRule: "evenodd" })
        )
      );
    }
  }

  return (
    React.createElement(React.Fragment, null,
      React.createElement("div", { className: "d-flex align-items-center" },
        ratingStar
      )
    )
  );
}

const ProductRating = (props) => {
  // Assuming you pass the rating as a prop to ProductRating
  const { rating } = props;

  return (
    React.createElement(ReviewRating, { rating: rating })
  );
};

export default ProductRating;
