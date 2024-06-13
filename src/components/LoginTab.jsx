import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";


const LoginTab = () => {


  const [cookies,setCookies, removeCookie] = useCookies([]);
const [getdata,setGetData] = useState({});
const nevigate = useNavigate();

  useEffect(() => {
    if(cookies.jwt){
      nevigate("/");
     
    }
   
  },[]);


  const [logindetail,setLoginDetail] = useState({
    email:'',
    password:''
  });
 

const  sendData = async (e) => {
    e.preventDefault();
  try {
      fetch("https://glorious-dog-sweatpants.cyclic.app/login", {
      method:"POST",
      headers:{
        'Content-type':'application/json; charset=UTF-8'
      },
      credentials: "include",
      body: JSON.stringify(logindetail)
    
    }).then( res => res.json()).then(data => {
      if(data){
        setCookies("jwt",data.jwt, { path: "/" });
        nevigate("/",{state:{data:data}})
     
        
      }
      
    });
  } catch (e) {
    console.error('Error', e)
  }
  
}


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
