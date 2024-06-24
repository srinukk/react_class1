import useCounter from "../components/customhooks/usecounter"
import Barcomponent from "../components/navbar/navbar"


   


   
const ContactScreen = () =>{
    const [age,increaseage,decreaseage,resetage]=useCounter(1000,1000)
    return(
        <>
        <Barcomponent/>
        <h2>welcome to contact screen</h2>
        {/* <Usereducercomponent/> */}
        <h1>{age}</h1>
        <button onClick={increaseage}>increase age</button>
        <button onClick={decreaseage}>deccrease age</button>
        <button onClick={resetage}>reset age</button>


        </>
    )
}
export default ContactScreen