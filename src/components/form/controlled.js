import { useState } from "react"





const Controlledform = () =>{
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [gender,setgender] = useState("")
    const [formerrors,setformerrors]= useState({
        usernameerr:null,
        passworderr:null,
        gendererr:null
    })
    const userhandler = (event) =>{
        const userenteredname = event.target.value
        setusername(userenteredname)
           console.log("userenteredname",userenteredname)
           const usernameregex = /[a-z][0-9]/
           const usertestpassed = usernameregex.test(userenteredname)
        if(usertestpassed){
            console.log("username test passed")
            setformerrors({...formerrors,usernameerr:null})
        }else{
            console.log("username test failed")
            setformerrors({...formerrors,usernameerr:"invalid username"})

        }
        
    };
    const passwordhandler = (event) =>{
        const userenteredpassword = event.target.value
        setpassword(userenteredpassword)
           console.log("userenteredpassword",userenteredpassword)  
           const passtestcase = userenteredpassword.length > 5 ?true : false
           if(passtestcase){
            console.log("pass tst passed")
            setformerrors({...formerrors,passworderr:null})
           }else{
            console.log("pass tst failed")
            setformerrors({...formerrors,passworderr:"invalid paasword"})

           }
    };
    const genderhandler = (event) =>{
        const userenteredgender = event.target.value
        setgender(userenteredgender)
           console.log("userenteredgender",userenteredgender)
        
    }
    const handleform = () =>{

    }
    return(
        <>
         <form onSubmit={handleform}>
  <div className="form-group">
    <label htmlFor="usename">usename:</label>
    <input 
    type="username" 
    className="form-control" 
    id="usename" 
    placeholder="username"
    value={username}
    onChange={userhandler}
    
    />
    

  </div>
  {formerrors.usernameerr && <span style={{color:"red"}}> username must have alphabets and num</span>}

  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password"
     className="form-control"
      id="pwd"
      placeholder="password"
      value={password}
      onChange={passwordhandler} />
  </div>
  {formerrors.passworderr && <span style={{color:"red"}}> passwoed must contain more than 5 chars</span>}
  <div>
 <select value={gender} onChange={genderhandler}>
    <option type="male">male</option>
    <option type="female">female</option>
  </select>
  </div>
  
  
 {!formerrors.usernameerr &&!formerrors.passworderr && <button type="submit" className="btn btn-default">
    Submit
  </button>}
</form>
        
        
        </>
    )
}
export default Controlledform