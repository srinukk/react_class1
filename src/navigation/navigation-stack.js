import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/aboutscreen";
import ContactScreen from "../screens/contactscreen";
import SettingScreen from "../screens/settingscreen";
import Invalidscreen from "../screens/invalidscreen";
import Productdetailscomponent from "../components/items/productdetails";
import { createContext, useState } from "react";

  export   const userinfo = createContext(); 

function Navigationstack (){
    const [username,setusername] = useState("srinu")
    const [count,setcount] = useState(0);
    const incresecount = () =>{
        setcount(count+1)
    }
    return(
    <userinfo.Provider 
    value={{name:username,
    salary:2000,
    count:count,
    incresecount:incresecount}}>
        
     <BrowserRouter>
    <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/about" Component={AboutScreen}/>
        <Route path="/contact" Component={ContactScreen}/>
        <Route path="/settings" Component={SettingScreen}/>
        <Route path="*" Component={Invalidscreen}/>
        <Route path={":category/:productid"} Component={Productdetailscomponent}/>

    </Routes>
    
    </BrowserRouter>
    </userinfo.Provider>
    )
}
export default Navigationstack