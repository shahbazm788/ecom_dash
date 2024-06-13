import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
//import "./cssfiles/sidebar.css";
import './sassFiles/sidebar.scss'
import { FaArrowRight,FaArrowLeft , FaHome,FaFileAlt,FaUsers,FaFileSignature} from 'react-icons/fa';
import {Nav,NavDropdown} from 'react-bootstrap'
// import SendPost from './SendPost';

const Sidebar = () => {
  const [active,seActive] = useState('active');
  const [sideBarClass,setSideBarClass] = useState("")
  const [rightArowClass,setRightArowClass] = useState("show");
  const [leftArowClass,setLeftArowClass] = useState("hide");


  const showLeftArow = () => {
    setSideBarClass("side_hide_active");
    setLeftArowClass("show");
    setRightArowClass("hide")
   
  }
  const showRightArow = () => {
    setSideBarClass("side_hide");
    setLeftArowClass("hide");
    setRightArowClass("show")
  
  }
  return (
   <>
    <div className={`sidebar_inner ${sideBarClass}`}>
      <div className="arrows">
        <div className={`arow_right ${rightArowClass}`} onClick={showLeftArow}>
        <FaArrowRight />
        </div>
        <div className={`arow_left ${leftArowClass}`} onClick={showRightArow}>
        <FaArrowLeft />
        </div>
      </div>
    <LinkContainer to="/" >
      <Link className='side_link'  onClick={showRightArow}><FaHome /> Home</Link>
    </LinkContainer>
    <LinkContainer to="/posts" >
      <Link className='side_link' onClick={showRightArow}><FaFileAlt /> Posts</Link>
    </LinkContainer>
    <LinkContainer to="/users" >
      <Link className='side_link' onClick={showRightArow}><FaUsers /> Users</Link>
    </LinkContainer>
    <LinkContainer to="/addpost" >
      <Link className='side_link' onClick={showRightArow}><FaFileSignature /> Add Post</Link>
    </LinkContainer>
    {/* <LinkContainer to="/sendpost" >
      <Link className='side_link' onClick={showRightArow}><FaFileSignature /> Send Post</Link>
    </LinkContainer> */}
  
    </div>
   </>
  )
}
 
export default Sidebar