import { useState } from "react"
import Countcomponent from "./count"
import ButtonComponent from "../button/button"





const Profilecomponent = () =>{
    const [name,setname] = useState("srinu")
    const [isemployee,setemployee] = useState(false)
    const changeemployeestatus = () =>{
        setemployee(!isemployee)
    }

    const changename = () =>{
        setname("srinivas")
    }
    const percentage = (value,percent) =>{
        return value+value*(percent/100)

    }
    const [role,setrole] = useState({
        name:"ram",
        salary:1000,
        designation:"bacend developer"
    })
    const changerole = () =>{
        setrole({...role,
        
            salary:percentage(role.salary,20)})
    }

    
    return(
        <>
        <h4>dummy profile</h4>
        <h4>my name is {name}</h4>
        <button onClick={changename}>change my name</button>
        <h4>srinu is {isemployee?"employee":"not an employee"}</h4>
        <button onClick={changeemployeestatus}> change employee status</button>
        {
            isemployee && <Countcomponent/>
        }
        <h4>{role.name}</h4>
        <h4>{role.salary}</h4>
        <h4>{role.designation}</h4>
        <ButtonComponent text="salary" onSmash={changerole}/>


        </>
    )
}
export default Profilecomponent