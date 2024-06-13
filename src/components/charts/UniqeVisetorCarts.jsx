import React, { useState,useLayoutEffect,useRef } from 'react'

import {AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area,Legend} from 'recharts';


const UniqeVisetorCarts = () => {
    const ref = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
    const data = [
        {name:"Sun",uv:"500",pv:"300"},
        {name:"Mon",uv:"700",pv:"200"},
        {name:"Tue",uv:"600",pv:"700"},
        {name:"Wed",uv:"200",pv:"100"},
        {name:"Thr",uv:"500",pv:"300"},
        {name:"Fir",uv:"800",pv:"500"},
        {name:"Sat",uv:"1000",pv:"200"}
    ];
useLayoutEffect(() => {
    setDivWidth(ref.current.clientWidth);
    console.log(divWidth)
},[]);



    return (
    <>
    <div className="uniqu_visetor shadow" >
        <h6>Unique Visetors</h6>

        <div ref={ref}>
       
        <AreaChart width={divWidth - 5} height={300} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <Legend verticalAlign="bottom" height={36}/>
  <Tooltip />
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

        </div>
        
    </div>
    </>
  )
}

export default UniqeVisetorCarts