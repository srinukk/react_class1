import { useContext } from "react"
import Barcomponent from "../components/navbar/navbar"
import { userinfo } from "../navigation/navigation-stack"
import { DECREASE_COUNT, INCREASE_COUNT } from "../navigation/jsfunctions"


const AboutScreen = () =>{
    const { incresecount,count,currentstate,dispatchfun}=useContext(userinfo)

    return(
        <>
        <Barcomponent/>
        <h2>welcome to about  screen{currentstate.count}</h2>
        <button onClick={ ()=>{
            dispatchfun({
                type:INCREASE_COUNT
            })
        }}>increasecount</button>
           <button onClick={ ()=>{
            dispatchfun({
                type:DECREASE_COUNT
            })
        }}>increasecount</button>
        </>
    )
}
export default AboutScreen