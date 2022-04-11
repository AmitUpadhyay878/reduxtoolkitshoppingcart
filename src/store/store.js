import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice' 
import productReducer  from './ProductSlice'
const store = configureStore({
    reducer:{
        cart,
        product:productReducer
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store