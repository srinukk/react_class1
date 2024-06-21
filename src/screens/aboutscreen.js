import { useContext } from "react"
import Barcomponent from "../components/navbar/navbar"
import { userinfo } from "../navigation/navigation-stack"


const AboutScreen = () =>{
    const { incresecount,count}=useContext(userinfo)

    return(
        <>
        <Barcomponent/>
        <h2>welcome to about  screen{count}</h2>
        <button onClick={ incresecount}>increasecount</button>
        </>
    )
}
export default AboutScreen