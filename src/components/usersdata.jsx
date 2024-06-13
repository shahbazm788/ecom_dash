import React from 'react'
import {Row,Col} from 'react-bootstrap'

import {FaTrashAlt,FaEdit,} from 'react-icons/fa';
const Usersdata = (usersData) => {




  return (
    <>
    {usersData.usersData?usersData.usersData.map((item,i) => {
            return <>
                 <div >
                  <Row key={i}>
                  <Col sm={3}>{item.userName}</Col>
                  <Col sm={3}>{item.userEmail}</Col>
                  <Col sm={2}><img id='user_img' src={`../../img/${item.userDP}`} alt='img' /></Col>
                  <Col sm={2}>{item.userRole}</Col>
                  <Col sm={2}>
                   <div className={`edit_div `} >
                       <FaEdit onClick={() => {
                        // console.log(document.getElementById(`user_menu_id${item.userId}`))
                        document.getElementById(`user_menu_id${item.userId}`).classList = "user_menu_active"
                        
                       }}/>
                
                   <FaTrashAlt onClick={() => usersData.deleteUser(item.userId)} />

                   <div className="user_menu " id={`user_menu_id${item.userId}`}>
                    <ul>
                      <li className='user_menu_li' 
                      onClick={() => {
                        // console.log(document.getElementById(`user_menu_id${item.userId}`))
                        document.getElementById(`user_menu_id${item.userId}`).classList = "user_menu_hide"
                        const user_id = item.userId;
                       usersData.updateUser(user_id,'admin');
                        
                       }}
                      >Admin</li>
                      <li className='user_menu_li' 
                        onClick={() => {
                          // console.log(document.getElementById(`user_menu_id${item.userId}`))
                          document.getElementById(`user_menu_id${item.userId}`).classList = "user_menu_hide"
                          const user_id = item.userId;
                          usersData.updateUser(user_id,'modiator');
                         }}
                      >Modiator</li>
                      <li className='user_menu_li' 
                        onClick={() => {
                          // console.log(document.getElementById(`user_menu_id${item.userId}`))
                          document.getElementById(`user_menu_id${item.userId}`).classList = "user_menu_hide"
                          const user_id = item.userId;
                          usersData.updateUser(user_id,'user');
                         }}
                      >User</li>
                    </ul>
                   </div>
                   </div>
                  </Col>
                  </Row>
                 </div>
            </>
          }):'loding...'} 
    </>
  )
}

export default Usersdata