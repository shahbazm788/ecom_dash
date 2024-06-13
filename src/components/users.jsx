import React,{useEffect,useState, useCallback} from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios';
import {FaTrashAlt,FaEdit,} from 'react-icons/fa';
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import "./sassFiles/user.scss";
import Usersdata from './usersdata';


const Users = () => {



  const [cookies, removeCookie] = useCookies([]);

  const nevigate = useNavigate();
  const [userData,setUserData] = useState()

const [userActive,setUserActive] = useState('');



const getData =   () => {
  axios.get('http://localhost:5000/usersdata',{
  withCredentials:true
}).then(res => {
  setUserData(res.data)
 
})
}


const updateUser = useCallback( (userId,value) => {
  const user_data = {userId,value}
   axios.post('http://localhost:5000/updateuser',user_data,{
    
    withCredentials:true
   }).then(res => getData())
},[]);

const deleteUser = (userId) => {
 
}
  useEffect(() => {
  
    if (!cookies.jwt) {
      nevigate("/login");
    }
  
    getData();
  
  },[cookies,nevigate,setUserData]);
  return (
    <>
      <div className="user_outer">
        <h1>Users Data</h1>
        <div className="user_inner">
       <div className="user_data_header">
       <Row>
            <Col sm={3}><h6>Users Names</h6></Col>
            <Col sm={3}><h6>Emails</h6></Col>
            <Col sm={2}><h6>DP,s</h6></Col>
            <Col sm={2}><h6>Role</h6></Col>
            <Col sm={2}><h6>Buttons</h6></Col>
          </Row>
          <hr />
       </div>
       <Usersdata usersData={userData} updateUser={updateUser} deleteUser={deleteUser}/>
         
          {/* <Row>
            <Col sm={3}>1</Col>
            <Col sm={3}>1</Col>
            <Col sm={2}>1</Col>
            <Col sm={2}>1</Col>
            <Col sm={2}>1</Col>
          </Row> */}
         
        </div>
      </div>
    </>
  )
}

export default Users