import React from 'react'
import {Row,Col,Container,Button, Navbar,Nav, Form} from "react-bootstrap";
import './cssfiles/chartsData.css';
import UniqeVisetorCarts from './charts/UniqeVisetorCarts';
import ReachesChart from './charts/ReachesChart';
const ChartsData = () => {
  return (
    <>
    <div className="charts_data">
       
            <Row>
                <Col lg={6}>
                  <UniqeVisetorCarts />
                </Col>
                <Col lg={6}>
                    <ReachesChart />
                </Col>
            </Row>
        
    </div>
    </>
  )
}

export default ChartsData