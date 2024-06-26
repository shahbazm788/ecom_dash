import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";


const LoginTab = () => {


  const [cookies,setCookies, removeCookie] = useCookies([]);
const [getdata,setGetData] = useState({});
const nevigate = useNavigate();

  
const myUrl = "http://localhost:5000/admin/login";

  const [logindetail,setLoginDetail] = useState({
    email:'',
    password:''
  });
 

const  sendData = async (e) => {
    e.preventDefault();
  try {
      fetch(myUrl, {
      method:"POST",
      headers:{
        'Content-type':'application/json; charset=UTF-8'
      },
       credentials: "include",
      body: JSON.stringify(logindetail)
    
    }).then( res => res.json()).then(data => {
      if(data){
       setCookies("jwt",data.jwt, { path: "/" });
      
      }
      
    });
  } catch (e) {
    console.error('Error', e)
  }
  
}
useEffect(() => {
    if(cookies.jwt){
      nevigate("/");
    
     
     }
  
   
  },[setCookies]);

  return (
    <div>
         <h1>Login </h1>
          <Form onSubmit={(e) => sendData(e)} >
            <Form.Control type="email" placeholder="Emaill....." onChange={(e) => {
              return setLoginDetail({...logindetail,email:e.target.value});
            }} />
            <Form.Control type="password" placeholder="password"  onChange={(e) => {
              return setLoginDetail({...logindetail,password:e.target.value});
            }}/>
            <Button type="submit">SUbimt</Button>
          </Form>
    </div>
  )
}

export default LoginTab
