import React, { useState } from 'react'

function Temperature (){
    let [temp,setTemp] = useState(72)
    return(
        <div>
            <p>The temperature is {temp}</p>
            <button onClick = {()=>setTemp(++temp)}>+</button>
            <button onClick = {()=>setTemp(--  temp)}>-</button>
        </div>
    )
}
export default Temperature