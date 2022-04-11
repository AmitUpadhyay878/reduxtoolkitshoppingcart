import { createSlice } from "@reduxjs/toolkit";

// const initialState =[];

const STATUS = Object.freeze({
  IDEAL: "ideal",
  ERROR: "error",
  LOADING: "loading",
});

const ProductSlice = createSlice({
  name: "Product",
  // initialState:{
  //    cart:[],
  //    products:[]
  // },
  initialState: {
    data: [],
    Status: STATUS.IDEAL,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.Status = action.payload;
    },
    // remove(state, action) {
    //   return state.filter((item) => item.id !== action.payload);
    // },
  },
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

//Thunk
export function fetchProducts() {
  return async function faatchProductByThunk(dispatch, getState) {
    //getState is parameter. when your request is filter depand on parameter getState is that Parameter(Give AnyName instead of getState)
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDEAL));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
