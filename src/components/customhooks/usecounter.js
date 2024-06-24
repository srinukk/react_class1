import { useState } from "react"




const useCounter = (intialvalue=1,scale=1) =>{
    const [count,setcount] = useState(intialvalue);
    const increasehandler = ()  =>{
        setcount(count+scale)
    }
    const decreasehandler = ()  =>{
        if(count>0){
        setcount(count-scale)
        }else{
            alert("count alredy 0")
        }
    }
    const resethandler = ()  =>{
        setcount(0)
    }
    return [count,increasehandler,decreasehandler,resethandler]
}
export default useCounter