import React, { useState } from 'react'
import './room.css'

function Room (){
    const [isLit,setLit] = useState(true)
    console.log(isLit)
    return(
        <div className = {`${isLit? "light" : "dark"}`}>
            <p>The Light is: {isLit? "On" : "Off"}</p>
            <button onClick = {()=> setLit(true)}>On</button>
            <button onClick = {()=> setLit(false)}>Off</button>   
        </div>
    )
}
export default Room