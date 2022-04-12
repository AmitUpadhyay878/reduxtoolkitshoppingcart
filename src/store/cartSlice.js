import { createSlice } from "@reduxjs/toolkit";

// const initialState =[];

const cartSlice = createSlice({
  name: "cart",
  // initialState:{
  //    cart:[],
  //    products:[]
  // },
  initialState: [],
  totalPrice: 0,
  totalQuantities: 0,
  reducers: {
    add(state, { payload }) {
      const { id } = payload;
      const ExistID = state.find((item) => item.id === id);

      if (ExistID) {
        return state.map((item) => {
          if (item.id === id)
            return {
              ...item,
              qty: item.qty + 1,
            };
          return item;
        });
      } else {
        //old Redux
        //   return[...state,action.payload]

        //new in reduxToolkit
        // in reduxtoolkit slice  is allow to write that directlly
        //createSlice method internally works to return[...state,action.payload]

        // state.push(action.payload)
        state.push({ ...payload });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    inc( state, { payload }) {
             console.log(state);
      return state?.map((item) => {               
        if (item.id === payload) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
    },
    dec( state, {payload }) {
      return state.map((item) => {
        if (item.id === payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
    },
  },
});

export const { add, remove,inc,dec } = cartSlice.actions;
export default cartSlice.reducer;
