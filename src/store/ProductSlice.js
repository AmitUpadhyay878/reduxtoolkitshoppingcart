import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState =[];

export const STATUS = Object.freeze({
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
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.Status = action.payload;
    // },
    // // remove(state, action) {
    // //   return state.filter((item) => item.id !== action.payload);
    // // },
  },
    extraReducers:(builder)=>{
      builder
      .addCase(fetchProducts.pending,(state,action)=>{
            state.Status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.Status = STATUS.IDEAL;
  })
  .addCase(fetchProducts.rejected,(state,action)=>{
    state.Status = STATUS.ERROR;
})
    }


});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;





//---------------------Thunk----------------------/////////
export const fetchProducts = createAsyncThunk('products/fetch',async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
})




// export function fetchProducts() {
//   return async function fetchProductByThunk(dispatch, getState) {
//     //getState is parameter. when your request is filter depand on parameter getState is that Parameter(Give AnyName instead of getState)
//     dispatch(setStatus(STATUS.LOADING));

//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();

//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDEAL));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
