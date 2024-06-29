import { createSlice } from '@reduxjs/toolkit';


const products_slice = createSlice({
    name:"products_slice",
    initialState:{
      products:[]
    },
    reducers:{
      addToProducts : (state,action) => {
        const coming_data = action.payload.posts;
        coming_data.map((item,i) => {
          state.products.push(item);
        })
        // console.log(state.products)
      },
      savedProducts: (state,action) => {
        
      },
      getProducts : (state,action) => {
        state.products.push(action.payload)
      },
      removeProduct: (state,action) => {
       console.log(action.payload)
      }
  
    }
    
});

export default products_slice.reducer;
export const {addToProducts,savedProducts,getProducts,removeProduct} = products_slice.actions;