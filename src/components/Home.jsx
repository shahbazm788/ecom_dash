import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router";
import { useLocation } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import All from "./all";
import './cssfiles/home.css';

import InfoBlocks from "./InfoBlocks";
import ChartsData from "./ChartsData";
import ToDo from "./ToDo";
import ToDoBlocks from "./ToDoBlocks";





const Home = () => {
    const nevigate = useNavigate();
    const [spanClass,setSpanClass] =useState('');
    const data = useLocation();
    const [cookies, removeCookie] = useCookies([]);
   
    
 useEffect( () => {

    if (!cookies.jwt) {
      nevigate("/login");
    }
   else{
         fetch("http://localhost:5000/user",{
          credentials: "include"
         }).then(res => res.json()).then(data => console.log(data))
        // console.log(cookies)
 }
 },[]);


  return (
    <>
      <InfoBlocks />
       <ChartsData />
      <ToDoBlocks />
    </>
  )
}

export default Home