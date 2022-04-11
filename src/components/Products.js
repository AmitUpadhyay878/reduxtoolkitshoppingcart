import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { fetchProducts } from "../store/ProductSlice";
import { STATUS } from "../store/ProductSlice";
import Alert from '@mui/material/Alert';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, Status } = useSelector((state) => state.product);
  // const [loading, setloading] = useState(false);
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());

    // setloading(true);
    // const fetchData = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    //   setloading(false);
    // };
    // fetchData();
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };
  if (Status === STATUS.LOADING) {
    return <CircularProgress />;
  }
  if (Status === STATUS.ERROR) {
    return <Alert severity="error">Server Error</Alert>
  }

  return (
    <>
      <h2>Product List:</h2>
      <div>
        {products?.map((product) => {
          return (
            <>
              <Card style={{ width: "200px" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => addToCart({ qty: 1, ...product })}
                    style={{ color: "#333C83" }}
                  >
                    Add To Cart
                  </Button>
                  <Button size="small" style={{ color: "#FF8080" }}>
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
