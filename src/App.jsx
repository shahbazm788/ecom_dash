// import './App.css';
import './components/sassFiles/app.scss';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Button, ToggleButton} from 'react-bootstrap';
import LoginTab from './components/LoginTab.jsx'; 
import Home from './components/Home.jsx';
import About from './components/About';
import Posts from './components/posts';
import Addpost from './components/addpost';
import Users from './components/users';
import SettingPanele from './components/settingPanele';
// import SendPost from './components/SendPost';
import EditPost from './components/EditPost';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Reguser from './components/reguser';
// import { io } from 'socket.io-client';


function App() {
 const [bg,setBg] = useState({theme:"light"});
 const [cookies, removeCookie] = useCookies([]);

//  const nevigate = useNavigate();
//  const dispatch = useDispatch();
//  const select = useSelector((state) => {
//   return state.addIoSlice[0];
//  })
// const socket = select.io("http://localhost:5000");
useEffect(() => {
  document.querySelector("body").setAttribute("data-theme",bg.theme);
//   if (!cookies.jwt) {
//     nevigate("/login");
//   }
//  else{
//        fetch("http://localhost:5000/user",{
//         credentials: "include"
//        }).then(res => res.json()).then(data => console.log(data))
//       // console.log(cookies)
// }

}),[];

  return (
    <>
    <SettingPanele />
     <Routes>
      <Route exact path='/' element={<Home />} />
    
      <Route  path='/login' element={<LoginTab />} />
     <Route path='/reg' element={<Reguser /> } />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/addpost" element={<Addpost />} />
      {/* <Route path="/sendPost" element={<SendPost />} /> */}
      <Route path="/editpost" element={<EditPost />} />
      
       </Routes> 
    </>
  )
}

export default App
