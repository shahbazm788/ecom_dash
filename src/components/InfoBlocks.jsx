import React from 'react'
import {FaUsers , FaArrowUp,FaComment,FaFileAlt,FaArrowDown,FaComments} from 'react-icons/fa';
import {Row,Col,Container,Button, Navbar,Nav, Form} from "react-bootstrap";
import './cssfiles/info_blocks.css'













const InfoBlocks = () => {
    
  return (
    <>
    <div className="info_bloks">
     
     <Row >
       <Col md={6} lg={3}>
       <div className="info_col visetor">
          <div className="info_col_text">
           <h5>Visetors</h5>
           <p>2.5k <span className={`info_col_p_span success_color`}>+15%<FaArrowUp /></span></p>
          </div>
          <div className="info_col_icon">
          <FaUsers />
          </div>
       </div>
       </Col>
       <Col md={6} lg={3}>
       <div className="info_col">
       <div className="info_col_text">
           <h5>Total Products</h5>
           <p>1.1k <span className={`info_col_p_span danger_color`}>-5%<FaArrowDown /></span></p>
          </div>
          <div className="info_col_icon">
          <FaFileAlt />
          </div>
       </div>
       </Col>
       <Col md={6} lg={3}>
       <div className="info_col">
       <div className="info_col_text">
           <h5>Comments</h5>
           <p>1.3k<span className={`info_col_p_span success_color`}>15%<FaArrowUp /></span></p>
          </div>
          <div className="info_col_icon">
          <FaComment />
          </div>
       </div>
       </Col>
       <Col md={6} lg={3}>
       <div className="info_col">
       <div className="info_col_text">
           <h5>Measseges</h5>
           <p>3.5k <span className={`info_col_p_span success_color`}>+8%<FaArrowUp /></span></p>
          </div>
          <div className="info_col_icon">
          <FaComments />
          </div>
       </div>
       </Col>

      </Row>
     
      </div> </>
  )
}

export default InfoBlocks