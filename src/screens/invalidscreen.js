import { useNavigate } from "react-router-dom"
import ButtonComponent from "../components/button/button"



const Invalidscreen = () =>{
    const navigate= useNavigate()
    const invalid = () =>{
        navigate("/")

    }
    return(
        <>
        <h1>404 not found</h1>
    <ButtonComponent text="back to home" onSmash={invalid}/>
        </>
    )
}
export default Invalidscreen