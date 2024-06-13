import React , {useEffect , useState}from 'react'
import { Col, Row } from 'react-bootstrap'
import ToDo from './ToDo'
// import './cssfiles/todoblocks.css'
import './sassFiles/todoblocks.scss'
import Wheather from './Wheather'
import axios from "axios";

import TopPosts from './TopPosts'




const ToDoBlocks = () => {
   
  const [wheatherdata, setWheatherData] = useState({
    temp: 0.0,
    feels_like:0.0,
    humidity: 0.0,
    pressure : 0.0, 
    temp_max: 0.0,
    temp_min: 0.0,
    wind:0.0
    
  });


  


  useEffect( () => {
   
    //   fetch('https://api.openweathermap.org/data/2.5/weather/?lat=24.8546842&lon=67.0207055&units=metric&APPID=c93a3fa612f057e6c0bc4ebbae1b9b0f')
    //     .then((res) => {
    //       return res.json()
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       setWheatherData({
    //         temp: data.main.temp,
    //         feels_like:data.main.feels_like,
    // humidity: data.main.humidity,
    // pressure : data.main.pressure, 
    // temp_max: data.main.temp_max,
    // temp_min: data.main.temp_min,
    // wind:data.wind.speed
    //       });
          
    //     })
    fetch('https://api.openweathermap.org/data/2.5/weather/?lat=24.8546842&lon=67.0207055&units=metric&APPID=c93a3fa612f057e6c0bc4ebbae1b9b0f')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // console.log(data);
      setWheatherData({
        temp: data.main.temp,
        feels_like:data.main.feels_like,
humidity: data.main.humidity,
pressure : data.main.pressure, 
temp_max: data.main.temp_max,
temp_min: data.main.temp_min,
wind:data.wind.speed
      });
      
    })
  },[]);
  return (
    <>
        <div className="todo_bloks">
            <Row>
                <Col lg={4} md={6} >
                    <div className="todo_outer shadow">
                        <h6>ToDo</h6>
                        
                        <ToDo />
                    </div>
                </Col>
               
                <Col lg={4} md={6} >
                <div className="todo_outer shadow">
                    <Wheather prop={wheatherdata}/>
                    </div>
                </Col>
                
                <Col lg={4} md={6} >
                    <div className="todo_outer shadow">
                        <h6>Top Posts</h6>
                        
                        <TopPosts />
                    </div>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default ToDoBlocks