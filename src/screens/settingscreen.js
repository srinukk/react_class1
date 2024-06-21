import { useContext } from "react"
import Barcomponent from "../components/navbar/navbar"
import { userinfo } from "../navigation/navigation-stack"




const SettingScreen = () =>{
    const { incresecount,count}=useContext(userinfo)
    return(
        <>
        <Barcomponent/>
        <h2>welcome to Setting screen{count}</h2>
        <button onClick={ incresecount}>increasecount</button>
        </>
    )
}
export default SettingScreen