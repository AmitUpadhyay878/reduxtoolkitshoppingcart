import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      setProducts(data);
    };
    fetchData();
    setloading(false);
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <h2>Product List:</h2>

      {loading ? (
        <h1>Loading......</h1>
      ) : (
        products?.map((product) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px",
            }}
          >
            <Card>
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
              <CardActions
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button
                  size="small"
                  onClick={() => addToCart(product)}
                  style={{ color: "#333C83" }}
                >
                  Add To Cart
                </Button>
                <Button size="small" style={{ color: "#FF8080" }}>
                  Remove
                </Button>
              </CardActions>
            </Card>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
