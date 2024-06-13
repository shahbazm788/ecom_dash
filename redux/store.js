import { configureStore } from '@reduxjs/toolkit' ;
import products_slice from './slices/products_slice.js';


export default configureStore({ 
reducer: {
    products:products_slice,
} 
})