import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/aboutscreen";
import ContactScreen from "../screens/contactscreen";
import SettingScreen from "../screens/settingscreen";
import Invalidscreen from "../screens/invalidscreen";
import Productdetailscomponent from "../components/items/productdetails";



function Navigationstack (){
    return <BrowserRouter>
    <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/about" Component={AboutScreen}/>
        <Route path="/contact" Component={ContactScreen}/>
        <Route path="/settings" Component={SettingScreen}/>
        <Route path="*" Component={Invalidscreen}/>
        <Route path={":category/:productid"} Component={Productdetailscomponent}/>

    </Routes>
    
    </BrowserRouter>
}
export default Navigationstack