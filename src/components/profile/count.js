import { useState } from "react"
import ButtonComponent from "../button/button"





const Countcomponent = () =>{
    const [count,setcount]=useState(0)
    // const toincrement = () =>{
    //     setcount(count+1)
    // }
    // const todecrement = () =>{
    //     if(count>0){
    //     setcount(count-1)
    //     }else{
    //         alert("count is alredy 0")
    //     } 
    // }
    // const reset = () =>{
    //     setcount(0)
    
    
    const counthandler = (action,value) =>{
        switch(action){
            case "increment":
                setcount(count+value)
                break;
            case "decrement":
            if(count>0){
                setcount(count-value)    
            }else{
                alert("already a 0")
            }
            break;
            case "reset":
                setcount(0)
                break;
                
        }

    }
    return(
        <>
        <h2>lets do increment and decrement </h2>
        <h3>current count value{count}</h3>
        {/* <button onClick={() =>counthandler("increment",1)}>increment</button>
        <button onClick={() =>counthandler("decrement",1)}>decrement</button>
        <button onClick={() =>counthandler("reset")}>reset</button> */}
         <ButtonComponent text="increment" onSmash={() =>counthandler("increment",1)}/>
         <ButtonComponent text="decrement" onSmash={() =>counthandler("decrement",1)}/>
         <ButtonComponent text="reset" onSmash={() =>counthandler("reset")}/>


        </>
    )
} 
export default Countcomponent