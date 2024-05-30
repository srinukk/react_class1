


import React from "react"

const ButtonComponent = (prop)=>{
    console.log(prop)
    const{text="srinu",color}=prop
    return(
        <button style={{color:color ,backgroundColor:"green"}}>{text}</button>
    )
}
export default ButtonComponent