import { useContext } from "react"
import { Link } from "react-router-dom"
import { userinfo } from "../../navigation/navigation-stack"




const Barcomponent = () =>{
const globalinfo=useContext(userinfo)
console.log(globalinfo)

    const linkstyle = {
        textDecoration:"none",
        padding:20,
        color:"black"

    }
    const navstyle = {
        position:"fixed",
        marginLeft:800
    }
    return(
        <>
        <nav style={navstyle} className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
       
       <Link style={linkstyle} to={"/"}>Home</Link>
      </li>
      <li className="nav-item">
      
      <Link style={linkstyle} to={"/about"} >About</Link>

      </li>
      <li className="nav-item">
      <Link style={linkstyle} to={"/contact"}>Contact</Link>

        
      </li>
      <li className="nav-item">
       
      <Link style={linkstyle} to={"/settings"}>Settings</Link>

      </li>
      <li className="nav-item">
       
       {/* <Link style={linkstyle} to={"/settings"}>Settings</Link> */}
      {globalinfo.name}{globalinfo.currentstate.count}
 
       </li>
    </ul>
  </div>
</nav>
        
        </>

    )
}
export default Barcomponent