

import { useLayoutEffect, useRef, useState } from 'react';
import {BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Area,Legend, Bar} from 'recharts';






const ReachesChart = () => {
    const ref = useRef(null);
    const [reachRef,setreachRef] = useState(0);

    const data = [
        {name:"Sun",nv:"500",pv:"300"},
        {name:"Mon",nv:"700",pv:"200"},
        {name:"Tue",nv:"600",pv:"700"},
        {name:"Wed",nv:"200",pv:"100"},
        {name:"Thr",nv:"500",pv:"300"},
        {name:"Fir",nv:"800",pv:"500"},
        {name:"Sat",nv:"1000",pv:"200"}
    ];
    useLayoutEffect(() => {
        setreachRef(ref.current.clientWidth);
    });
  return (
    <>

    <div className="reache shadow" ref={ref}>
        <h6>Total Reaches</h6>

        <BarChart width={reachRef - 10} height={300} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey='name' />
        <YAxis />
        <Legend />
        <Tooltip />
        <Bar dataKey='nv'  fill='#FFB400'/>
        <Bar dataKey='pv'  fill='#EA4850'/>
        </BarChart>
    </div>
    
    
    </>
  )
}







export default ReachesChart