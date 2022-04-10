import { configureStore } from "@reduxjs/toolkit";
import cart from './cartSlice' 

const store = configureStore({
    reducer:{
        cart,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store