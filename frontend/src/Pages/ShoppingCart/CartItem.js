import { useState } from "react";
import { BASE_URL, BASE_BACKEND_URL ,MediaURL} from "../../settings";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
const CartItem = (props) => {
  const navigate = useNavigate();
  let { product, ChangeQty, index,RemoveItem } = props;
  let image = MediaURL + product.images[0]["image"];

  const onChange = (e) => {
    let value = e.target.value
    ChangeQty(value, index);
  };

  return (
    <>
      <div className="d-flex d-md-flex" style={{maxHeight:"" }}>
        <img
          className="w-50 w-md-30 rounded-3 img-fluid "
          style={{ maxWidth: "100px",height:"100px"}}
          src={image}
          alt={product.name}
        />
        <div className="w-100 w-md-50 ps-2 ps-md-4">
          <h6
            className="text-md md-text-lg mb-1"
            onClick={() => {
              navigate("/product/view/", { state: { unq_id: product.id } });
            }}
          >
            {product.name}
          </h6>
          <div className="d-block d-sm-flex">
            <p className="pe-3 mb-0">₹{Number(product.amount).toFixed(2)}</p>
          </div>
          <div className="d-block d-md-flex align-items-center mt-2 md-mt-6"></div>
        </div>
        <div>
          <div className="w-100 w-md-50 mt-4 mt-md-0 mr-md-10">
            <p style={{textAlign:"end",cursor:"pointer"}} onClick={()=>{RemoveItem(index)}}><DeleteIcon sx={{textAlign:"end"}} /></p>
            {/* <i class="bi bi-trash-fill"></i> */}
            
            {/* <DeleteIcon sx={{textAlign:"end",color:"red"}} /> */}
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="1"
              aria-label="amount"
              value={product.Qty}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
