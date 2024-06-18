import { Link } from "react-router-dom"




const Barcomponent = () =>{
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
    </ul>
  </div>
</nav>
        
        </>

    )
}
export default Barcomponent