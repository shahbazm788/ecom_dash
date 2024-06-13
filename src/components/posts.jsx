import React , {useEffect, useState} from 'react'
import './sassFiles/posts.scss';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Postsdata from './postsdata';
import axios from 'axios';



const Posts = () => {

  const [cookies, removeCookie] = useCookies([]);
  const [posts,setposts] = useState();

  const nevigate = useNavigate();



const postData = async () =>  {
  await  axios.get('https://glorious-dog-sweatpants.cyclic.app/posts').then(data => setposts(data.data)).catch(err => console.log(err));
}
const deleatPost = async (postId) => {
  
  const respons = await axios.delete("https://glorious-dog-sweatpants.cyclic.app/deleatpost",{
   data:{postId},
   withCredentials: true
  }).then(res => postData() ).catch(err => console.log(err));
 

 
}
  useEffect(() => {
  
    
    if (!cookies.jwt) {
      nevigate("/login");
    }
  
    //getting posts below
    postData()

  },[cookies,nevigate,setposts]);


  return (
   <>
  <Postsdata posts={posts}  deleatPost={deleatPost} />
   </>
  )
}

export default Posts;
