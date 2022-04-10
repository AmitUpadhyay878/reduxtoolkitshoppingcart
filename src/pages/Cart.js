import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {products.map((dd) => {
        console.log(dd);
        <div key={dd.id} style={{height:"500px", backgroundColor:"red"}}> 
          <img src={dd.image} alt="" width="40px" height="40px"/>
          <h5>{dd.title}</h5>
        </div>
      })}
    </Box>
  );
};

export default Cart;
