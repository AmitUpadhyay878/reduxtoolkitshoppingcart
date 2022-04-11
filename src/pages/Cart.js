import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const handleRomove = (prodId) => {
    dispatch(remove(prodId));
  };

  return (
    <Box>
      {items.map((dd) => (
        <div key={dd.id}>
          <img src={dd.image} alt="" width="40px" height="40px" />
          <h5>{dd.title}</h5> <h5>{dd.price}</h5> <br />
          <Button variant="contained">+</Button>
          <h5>{dd.qty}</h5> <Button variant="contained">-</Button>
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
