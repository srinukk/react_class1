


import React from "react"

const ButtonComponent = (prop)=>{
    console.log(prop)
    const{text="srinu",color,onSmash}=prop
    return(
        <button style={{color:color ,backgroundColor:"green"}} onClick={onSmash}>{text}</button>
    )
}
export default ButtonComponent