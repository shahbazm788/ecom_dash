import  { useState, useRef,useEffect, useMemo, useTransition } from 'react';

import {Form , Button,InputGroup} from 'react-bootstrap';
import './sassFiles/addPost.scss';
import axios from 'axios';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

const Reguser = () => {

  const [cookies, removeCookie] = useCookies([]);

  const nevigate = useNavigate();
const [userData,setUserData] = useState();
const [file,setFile] = useState();


const myUrl = "http://localhost:5000/reg";
const  handeleSubmit = (e) => {
  // e.preventDegfault();
  // alert('ok')
  e.preventDefault();
  const formId = document.getElementById("myForm");
  const fd = new FormData(formId);
  console.log(fd);

  fetch(myUrl,{
    method: "POST",
    body:fd
  }).then(res => res.json()).then(data => {
    if(data === true){
      nevigate("/login");
    }
  })
}
useEffect(() => {
  
  if (cookies.jwt) {
    nevigate("/login");
  }
  // else{
  //   console.log(cookies.jwt)
  // }

},[]);
  return (
    <>
      <div className="add_post_outer">
      <h1>Registor</h1>
      {/* {//encType="multipart/form-data"} */}
      <Form  onSubmit={(e) => handeleSubmit(e)} id='myForm'> 
      <Form.Group controlId="">
            <Form.Label>Add Your name</Form.Label>
            <Form.Control type="text" placeholder="Add Your name.." name='name' />
          </Form.Group>
          {/* <Form.Group controlId="">
            <Form.Label>Add your name</Form.Label>
            <Form.Control type="text" placeholder="Add Name..." name='name'  required />
          </Form.Group> */}
          <Form.Group controlId="">
            <Form.Label>Add your Email</Form.Label>
            <Form.Control type="email" placeholder="Add Emaill...." name='email' required />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Add  your Password</Form.Label>
            <Form.Control type="password" placeholder="Add Password...." name='password' required />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Confirom Your name</Form.Label>
            <Form.Control type="password" placeholder="Confirom Password" name='c_password' />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Add Your Phone No</Form.Label>
            <Form.Control type="number" placeholder="Add Phone No" name='phone' />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Add Age</Form.Label>
            <Form.Control type="number" placeholder="Add Your Age" name='age' />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Gender</Form.Label>
            {/* <Form.Control type="text" placeholder="" name='' /> */}
            <Form.Check type="radio" label="Male" className="user-select-none" id="" name='gander' value={'male'} />
            <Form.Check type="radio" label="Female" className="user-select-none" id="" name='gander' value={'female'} />
          </Form.Group>
        <Form.Group controlId="">
          {/* Form.Label, Form.Control, Form.Text, Form.Check, InputGroup, etc */}
         
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="file" name='file' 
          // onChange={(e) => setFile(e.target.files[0])}
           />
        </Form.Group>
        <Form.Group controlId="">
          
            <Button variant="primary" type='submit'>
              Submit
            </Button>
        </Form.Group>
      </Form>
    </div>
    </>
  )
}

export default Reguser