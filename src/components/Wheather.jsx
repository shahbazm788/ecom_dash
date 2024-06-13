import {useState,useEffect} from 'react'
import { configDotenv, process } from 'dotenv';
import day from '../img/amcharts_weather_icons_1.0.0/animated/day.svg'
import celsius from '../img/celsius.svg'
import {FaWind,FaTint,FaSun,FaCloud,FaCloudShowersHeavy,FaCloudMoonRain,FaCloudMoon,FaCloudSunRain,FaFireAlt} from 'react-icons/fa'
import axios from "axios";







const Wheather = (prop) => {

const [newData,setNewData]= useState(prop.prop)

useEffect(() => {
 if(prop){
  setNewData(prop.prop);
  // console.log(newData)
 }
//  console.log(prop.prop.temp)
},[prop,newData]);

  return (
    //see styling of this component in todoblocks.css
   <>
    <div className="weather_outer">
      {/* <h6>Weather Report</h6> */}
     
      <div className="city">
        <div className="cityName">
          Karachi
        </div>
        <div className="time">
          3:00 Am
        </div>

      </div>
      <div className='tempreture'>
      <p className='deg'>{newData.temp} <img src={celsius} alt="" className='celsius_Icon' /></p>
      <p>Sunny</p>
      </div>
     
      <div className="wetar_icon_plus_heading">
      <div className="weather_city">
          <p><FaWind />{newData.wind} <small>km/h</small></p>
          <p><FaTint />  {newData.humidity}%</p>
          <p><FaFireAlt /> feel like <small className='small' >{newData.feels_like}</small> </p>
      </div>
        <div className="weather_img">
          <img src={day} alt="" className='weather_icon' />
        </div>
       
      </div>
    </div></>
  )
}

export default Wheather