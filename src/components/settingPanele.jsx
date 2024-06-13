import React, { useState } from 'react'
import './cssfiles/setting_penal.css';
import {FaCog} from "react-icons/fa"
const SettingPanele = () => {


    const [settingClass,setsettingClass] = useState("hide_setting_pennal")



  return (
    <div>
         <div className="cog" onClick={ () => setsettingClass('')}>
      <FaCog />
    </div>
        <div className={`setting_penal_inner ${settingClass}`}>
            <button onClick={() => setsettingClass("hide_setting_pennal")}>x</button>
            Setting
        </div>
    </div>
  )
}

export default SettingPanele