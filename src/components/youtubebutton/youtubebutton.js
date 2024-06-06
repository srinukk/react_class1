
import { Component } from "react";
import GreetingComponent from "../greetings/greeting";
import Todos from "../todos/todos";

class Youtubebutton extends Component{
    state = {
           subscribe:"plese subscribe",
           subscribed:"thank's for subscribing",
           issubscribe:false
    };
    changetext = ()=>{
        this.setState(
            {
                issubscribe:!this.state.issubscribe
            },
            ()=>{

            }
        );

    };


    render(){
        return(

            <>
            <button onClick={this.changetext}>
                {this.state.issubscribe?
                this.state.subscribed:
                this.state.subscribe}</button>
                {this.state.issubscribe &&
                 (<><GreetingComponent>enjoy pangagooo</GreetingComponent><br></br>
                 <Todos/>
                 </>)}
            </>
        )
        
    }
    
        
    
    
}
export default Youtubebutton