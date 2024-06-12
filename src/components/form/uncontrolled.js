import { useRef, useState } from "react"


const Uncontrolledform = () =>{
    const emailref = useRef();
    const passwordref = useRef();
    const [error,seterror]= useState("")
    const handleform = (event) =>{
      event.preventDefault();
        const email= emailref.current.value
        const password=passwordref.current.value
        const testregex=/code/
        const passwordregex=/[0-9]/
        if(testregex.test(email) && passwordregex.test(password)){
            seterror("")
        }
        else{
          seterror("invalid user credentials")
        }
        const logform = {
                email:email,
                password:password
        }
        console.log(logform)

      
     
      
    }
    return(
        <>
        <form onSubmit={handleform}>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input 
    type="email" 
    className="form-control" 
    id="email" 
    ref={emailref}
    />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordref} />
  </div>
  {error && <span style={{color:"red"}}>invalid user credentials</span>}
  <div className="checkbox">
    <label>
      <input type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

     
        </>
    )
}
export default Uncontrolledform