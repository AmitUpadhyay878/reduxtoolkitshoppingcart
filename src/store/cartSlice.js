import { createSlice } from "@reduxjs/toolkit";

// const initialState =[];


const cartSlice=createSlice(
    {
        name:"cart",
        // initialState:{
        //    cart:[],
        //    products:[]
        // },
        initialState:[],
        reducers:{
            add(state,action){

                        //old Redux
                        //   return[...state,action.payload]
                        // if(action.payload.id ==)
                        //new in reduxToolkit
                        // in reduxtoolkit slice  is allow to write that directlly 
                        //createSlice method internally works to return[...state,action.payload]
                        state.push(action.payload)
            },
            remove(state,action){
              return state.filter(item=>item.id !==action.payload)
            }
        }
    }
)

export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;