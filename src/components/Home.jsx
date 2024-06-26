import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import All from "./all";
import './cssfiles/home.css';

import InfoBlocks from "./InfoBlocks";
import ChartsData from "./ChartsData";
import ToDo from "./ToDo";
import ToDoBlocks from "./ToDoBlocks";
import {useSelector,useDispatch} from 'react-redux';
import {addToProducts,getProducts} from '../../redux/slices/products_slice.js';




const Home = () => {
    const nevigate = useNavigate();
    const [spanClass,setSpanClass] =useState('');
    const data = useLocation();
    const [cookies, removeCookie] = useCookies([]);
   
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



 useEffect( () => {

    if (!cookies.jwt) {
      nevigate("/login");
      
    }
    
//    else{
//          fetch("http://localhost:5000/user",{
//           credentials: "include"
//          }).then(res => res.json()).then(data => console.log(data))
//         // console.log(cookies)
//  }
if(products.length < 1){
  fetchData();
}
  

console.log(products)
 },[products]);


  return (
    <>
      <InfoBlocks />
       <ChartsData />
      <ToDoBlocks />
    </>
  )
}

export default Home