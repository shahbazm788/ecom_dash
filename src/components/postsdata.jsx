import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios';
import {FaTrashAlt,FaEdit} from 'react-icons/fa';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const Postsdata = (posts) => {

  const [cookies, removeCookie] = useCookies([]);

  const nevigate = useNavigate();
//  const data = posts.posts;
const [data,setData]=useState();
// console.log(data)


// const deleatPost = async (postId) => {
  
//    const respons = await axios.delete("http://localhost:5000/deleatpost",{
//     data:{postId},
//     withCredentials: true
//    }).then(res => console.log(res) ).catch(err => console.log(err));
  

  
// }

useEffect(() => {
  
  if (!cookies.jwt) {
    nevigate("/login");
  }
  setData(posts.posts);

},[cookies,posts,nevigate,setData]);


  return (
    <>
    <div className="postes_outer">
        <div className="posts_inner">
        {data?data.map((item,i) => {
         
        return <>
        <Row> 
     <Col sm={1}>{item.postHeading}</Col>
      <Col className='post_data' sm={8} dangerouslySetInnerHTML={{__html:item.post_body}}></Col>
      {/* <Col className='post_img' sm={2}><img src={"../../img/"+item.post_img} alt="" /></Col> */}
      {/* <Col className='post_img' sm={2}><img src={"../../../uploads/img/"+item.post_img} alt="" /></Col> */}
      <Col className='post_img' sm={2}><img src={`https://glorious-dog-sweatpants.cyclic.app/img/${item.post_img}`} alt="" /></Col>


      <Col sm={1}><FaEdit onClick={() => {
        nevigate("/editpost",{state:{post:item}})
      }} /> <FaTrashAlt onClick={() => posts.deleatPost(item._id)} /></Col>
     
    </Row>
        </>
        
      }):"Loding data"}
          
        </div>
   </div>
    </> 
  )
}

export default Postsdata
