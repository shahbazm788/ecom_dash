import React , {useEffect, useState} from 'react'
import './sassFiles/posts.scss';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Postsdata from './postsdata';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {addToProducts,getProducts} from '../../redux/slices/products_slice.js';
import ProductItemRow from './ProductItemRow.jsx';
const Products = () => {

  const [cookies, removeCookie] = useCookies([]);
  const [posts,setposts] = useState();

  const nevigate = useNavigate();
const dispatch = useDispatch();
const products = useSelector(state => state.products.products);

const fetchData =  async () => {
  
    const res = await axios.get("http://localhost:5000/products");
   
    try{
      const posts = res.data;
        dispatch(addToProducts({"posts":posts}));
     //  console.log(res.data)


      }
    catch(err){
      console.log(err);
    }
  
  }


  useEffect(() => {
  
    
    if (!cookies.jwt) {
      nevigate("/login");
    }
  if(products.length < 1){
    fetchData();
  }
    

  },[fetchData]);


  return (
   <>
   {products.map((item,i) => {
     return    <ProductItemRow key={i} i={i} item={item} />
   })}

  
   </>
  )
}

export default Products;
