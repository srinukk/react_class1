import { useReducer } from "react"

const usereducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name:"srinivas"};
            case "INCREASE_SALARY":
                return {...state,salary:state.salary+1000};
                case "INCREASE_AGE":
                    return {...state,age:state.age+1};
                    case "ADD_NEW_MEM":
                        return {...state,team:[...state.team,{name:"c"}]};
                        default:



    }

}


const Usereducercomponent = () =>{
    const intialstate = {
       name:"srinu",
       salary:1000,
       age:21,
       team:[{name:"a"},{name:"b"}]
    }
      const [currentstate,dispatchfun]=useReducer(usereducer,intialstate);
      const changename = () =>{
        dispatchfun({
            type:"CHANGE_NAME"
        })
      };
      const increasesalary = () =>{
        dispatchfun({
            type:"INCREASE_SALARY"
        })
      };
      const increaseage = () =>{
        dispatchfun({
            type:"INCREASE_AGE"
        })
      };
      const addnewmem = () =>{
        dispatchfun({
            type:"ADD_NEW_MEM"
        })
      };
    return (
        <>
        <h1>usereducer examSple</h1>
        <p>{currentstate.name}</p>
        <button onClick={changename}>change name</button>
        <p>{currentstate.salary}</p>
        <button onClick={increasesalary}>increse salary</button>
        <p>{currentstate.age}</p>
        <button onClick={increaseage}>increase age</button>
        <button onClick={addnewmem}>addnew name</button>

        <ol>
        {
            currentstate.team.map((eachobj)=>{
                return(
                    <>
                     <li>{eachobj.name}</li>
                    </>
                )
            })
        }
                </ol>





        </>
    )
}
export default Usereducercomponent