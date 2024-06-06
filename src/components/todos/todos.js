import { Component } from "react";




class Todos extends Component{
     state = {
        todos:["apple","banana"],
        add:"orange"
     }
     addnew = ()=>{
        this.setState(
            {
              todos:[...this.state.todos,this.state.add]
            }
        )
     }
     deleteone = (index) => {
        const newlist=this.state.todos
        newlist.splice(index,1);
        this.setState(
            {
                todos:newlist
            }
        )


     };
     updateone = (index) => {
         const ufruit="avacado";
         const updatetodos = this.state.todos.map((eachone,i) => {
            if(index===i){
                
                return console.log(ufruit)
                
            }else{
               
                return console.log(ufruit)
            }
         })
         this.setState(
            {
                todos:updatetodos
            }
         )

     }


    render(){
        return(
       <>
       <button onClick={this.addnew}>click to add</button>
       <ol>
       {
            this.state.todos.map((eachfruit) => {
                return(
                    
                    <>
                    
                    <li>{eachfruit}</li>
                    <button onClick={() => this.deleteone()}>delete</button>
                    <button onClick={() => this.updateone()}>update</button>
                    
                    
                    </>
                    
                )
                    
                
            })


       }
       </ol>
       
       </>

        )
    }

}
export default Todos