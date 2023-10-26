import React from 'react'
import "./assets/css/Comming.css"
import des from "./assets/Design.gif"
import robot from "./assets/robot.png"
function Comming() {
  return (
    <>
        <div className="comming_soon_container">
            <img src={des} className='des' alt="" srcset="" />
            <img src={robot}  className="robot"alt="" srcset="" />
        </div>
    </>
  )
}

export default Comming