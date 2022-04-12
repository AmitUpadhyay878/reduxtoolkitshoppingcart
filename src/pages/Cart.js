import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove,inc,dec } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRomove = (prodId) => {
    dispatch(remove(prodId));
  };

  const Increment = (ProdId)=>{
      
          dispatch(inc(ProdId))
  }
  const Decreament = (ProdId)=>{
    dispatch(dec(ProdId))
  }
  return (
    <Box>
      {items.map((dd) => (
        <div key={dd.id}>
          <img src={dd.image} alt="" width="40px" height="40px" />
          <h5>{dd.title}</h5> <h5>{dd.price}</h5> <br />
          <Button variant="contained" onClick={()=>Increment(dd.id)}>+</Button>
          <h5>{dd.qty}</h5> <Button variant="contained" onClick={()=>Decreament(dd.id)}>-</Button>
          <br />{" "}
          <Button
            style={{ color: "#FF8080" }}
            onClick={() => handleRomove(dd.id)}
          >
            Remove
          </Button>
        </div>
      ))}
    </Box>
  );
};

export default Cart;
