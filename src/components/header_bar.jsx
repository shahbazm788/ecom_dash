import React, { useState , useEffect , useRef } from 'react'
import {FaBars} from 'react-icons/fa6'
import './cssfiles/header_bar.css'
import {FaSun,FaBell} from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import user_Icon_img from './../img/user_Icon_img.png'
import { FaUserAlt } from "react-icons/fa";
import { IoMdMailUnread,IoMdSettings,IoIosLogOut } from "react-icons/io";
import { MdOutlineChatBubble } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { io } from 'socket.io-client';




const Header_bar = () => {
    const [incomingMessage,setIncomingMessage] = useState([]);
    const [n_p_class,setN_p_class] = useState("hide");
    const [u_p_class,setU_p_class] = useState("hide")
    // const [l_m_class,setL_m_class] = useState("hide");
    const [bg,setBg] = useState({theme:"light"});
    const [lightDarkBtn,setLightDarkbtn] = useState("Set Dark Mode")
 const bgTheme = document.querySelector("body").setAttribute("data-theme",bg.theme);
 const upsRef = useRef();
 const npsRef = useRef();

 
 
//  const socketIo = io("http://localhost:5000",{
//     // autoConnect: false
//   });
    const setDark = () => {
        // document.querySelector("body").setAttribute("data-theme",bg.theme);
        bg.theme == "light" ? setBg({theme:"dark"}) : setBg({theme:"light"});
        lightDarkBtn == "Set Dark Mode" ? setLightDarkbtn("Set Light Mode") : setLightDarkbtn("Set Dark Mode");
        // setL_m_class("hide")
       
    }


    function handler(event) {
     
        if(!upsRef.current?.contains(event.target) ){
            setU_p_class("hide")
         };

    if(!npsRef.current?.contains(event.target)) {
        setN_p_class("hide")
    }
      

     

        //  console.log(event.target.parentNode.classList[0])
        //  console.log(event.target.classList[0])
    //    if(!event.target.parentNode.classList[0] == 'n_s_p' || !event.target.classList[0] == 'n_s_p'){
    //     setN_p_class("hide")
        
    //    }
      
         
    }

 

    useEffect(() => {
        
        //     let someData = {
        //         name:"",
        //         room: "admin room"
        //     }
        //         socket.emit("join_room", someData);
          

        // socket.on("recive_message",(data) => {
        //   setIncomingMessage((incomingMessage) => {
        //     return [...incomingMessage,data]
        //   }); 
        // });
        
        // function handler(event) {
        //     // console.log(event, 'clicked somewhere')   
        //     if(!cruntRef.current?.contains(event.target)) {
        //         // console.log('clicked outside of modal')
        //         setU_p_class("hide")
        //     }
    
        // }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler);
    

      }, [incomingMessage]);
  return (
    <>
    
        <div className="hader_bar_outer">
            <div className="sidebar_hide_icon">
            <FaBars className="" />
            </div>
        
            <div className="hader_bar_brand">
                <h4>Dashboard</h4>
            </div>
            <div className="icons_div">
                <ul>
                   
                   
                    <li id='u_s_p' ref={upsRef} onClick={(e) => {
                      
                        if(u_p_class == "hide"){
                            setU_p_class("show")
                           
                        }
                        else{
                            setU_p_class("hide")
                        }
                        
                    }} ><img src={user_Icon_img} alt="" /></li>
                    <li id='n_s_p' ref={npsRef}  onClick={() => {
                        if(n_p_class == "hide"){
                            setN_p_class("show")
                        }
                        else{
                            setN_p_class("hide")
                        }
                        console.log(npsRef)
                    }}><span  className='notification_span'></span> <FaBell   /> </li>
                    <li id='Bg_theme_li' onClick={() => {
                        // if(l_m_class == "hide"){
                        //     setL_m_class("show")
                        // }
                        // else{
                        //     setL_m_class("hide")
                        // }
                        bg.theme == "light" ? setBg({theme:"dark"}) : setBg({theme:"light"});
        // lightDarkBtn == "Set Dark Mode" ? setLightDarkbtn("Set Light Mode") : setLightDarkbtn("Set Dark Mode");
        // l_m_class == "show" ? setL_m_class("hide") :setL_m_class("show");
       
                    }}>{
                    // l_m_class == "show" ? <FaSun />  : <BsFillMoonStarsFill />
                    bg.theme == "dark" ? <FaSun  />  : <BsFillMoonStarsFill />
                    
                    }</li>
                </ul>
            </div>
           {/* Notifcation panel start  */}
           <div>
           <div className={`notification_panel ${n_p_class}`} >
                <div className='noti_header'>
                   <div> <h6 className='noti_header_h6'>Notifcations</h6></div>
                  <div className='noti_header_p'><p><span>6</span> New</p></div>
                </div>
            <div className='all_notifications'>
                <div className='notification' onClick={() => setN_p_class("hide")}>
                    <div className='notifiction_image'><img src='https://glorious-dog-sweatpants.cyclic.app/img/shahbaz.jpg' /></div>
                    <div className='text_div'>
                        <p className='heading_p'>Here a notifcation...</p>
                        <p className='text_p'>Some text coms here</p>
                    </div>
                    <div className='notificstion_day'>today</div>
                </div>

                <div className='notification' onClick={() => setN_p_class("hide")}>
                    <div className='notifiction_image'><img src='https://glorious-dog-sweatpants.cyclic.app/img/tahir.jpg' /></div>
                    <div className='text_div'>
                        <p className='heading_p'>Here a notifcation...</p>
                        <p className='text_p'>Some text coms here</p>
                    </div>
                    <div className='notificstion_day'>today</div>
                </div>
                <div className='notification' onClick={() => setN_p_class("hide")}>
                    <div className='notifiction_image'><img src='https://glorious-dog-sweatpants.cyclic.app/img/icons8-user-60.png' /></div>
                    <div className='text_div'>
                        <p className='heading_p'>Here a notifcation...</p>
                        <p className='text_p'>Some text coms here</p>
                    </div>
                    <div className='notificstion_day'>today</div>
                </div>
                <div className='notification' onClick={() => setN_p_class("hide")}>
                    <div className='notifiction_image'><img src='https://glorious-dog-sweatpants.cyclic.app/img/shah.jpg' /></div>
                    <div className='text_div'>
                        <p className='heading_p'>Here a notifcation...</p>
                        <p className='text_p'>Some text coms here</p>
                    </div>
                    <div className='notificstion_day'>today</div>
                </div>
                <div className='notification' onClick={() => setN_p_class("hide")}>
                    <div className='notifiction_image'><img src='https://glorious-dog-sweatpants.cyclic.app/img/taimoor.jpg' /></div>
                    <div className='text_div'>
                        <p className='heading_p'>Here a notifcation...</p>
                        <p className='text_p'>Some text coms here</p>
                    </div>
                    <div className='notificstion_day'>today</div>
                </div>
            </div>
           <button className='notifi_btn'>see all</button>




               </div>
               <span className={`notification_panel_span ${n_p_class}`}></span>
           </div>





           <div >
                <div className={`user_penal ${u_p_class}`}>
                    <div className='user_penal_inner'>

                        {/* starting user header where img nama and user roll will com  */}
                            <div className='user_header'>
                                <div className='user_header_img'>
                                    <img src='https://glorious-dog-sweatpants.cyclic.app/img/user_Icon_img.png' />
                                    <div className='online'></div>
                                </div>
                                <div className='user_header_info'>
                                    <h6>Shahbaz</h6>
                                    <p>Admin</p>
                                </div>
                            </div>
                        {/* End user header where img nama and user roll will com  */}

                      <div className='user_items' onClick={() =>  setU_p_class("hide")}>
                        <div className='u_i_icon'><FaUserAlt /></div>
                        <div className='u_i_text'><p>Profile</p></div>
                      </div>
                      <div className='user_items' onClick={() =>  setU_p_class("hide")}>
                        <div className='u_i_icon'><IoMdMailUnread /></div>
                        <div className='u_i_text'><p>Inbox</p></div>
                      </div>
                      <div className='user_items' onClick={() =>  setU_p_class("hide")}>
                        <div className='u_i_icon'><MdOutlineChatBubble /></div>
                        <div className='u_i_text'><p>Chat</p></div>
                      </div>
                      <hr />
                      <div className='user_items' onClick={() =>  setU_p_class("hide")}>
                        <div className='u_i_icon'><IoMdSettings /></div>
                        <div className='u_i_text'><p>Setting</p></div>
                      </div>
                      <div className='user_items' onClick={() =>  setU_p_class("hide")}>
                        <div className='u_i_icon'><IoIosLogOut /></div>
                        <div className='u_i_text'><p>Log Out</p></div>
                      </div>
                      
                    </div>
                </div>
                <span className={`user_panel_span ${u_p_class}`}></span>
           </div>
           {/* <div >
                <div className={`light_mood_penal ${l_m_class}`}>
                    
               
<button onClick={setDark}>{lightDarkBtn}</button>
<div>{
    incomingMessage.map((item,i) => {
        return <h1>{item.message}</h1>
    })
}</div>
                </div>
                <span className={`light_mood_panel_span ${l_m_class}`}></span>
           </div> */}

        </div>

    </>
  )
}

export default Header_bar
