import { Component } from "react";
import Imagecomponent from "../imagecomponent/imagecom";
import Heading1 from "../headings/heading";
import List from "../list/list";





class Recipecomponent extends Component{
    state = {
        items:[],
        issuccess:false
    }
    recipelist = () =>{
        fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then((response) => {
    const {recipes} =response
    this.setState(
        {
            items:recipes,
            issuccess:true
        },
        ()=>{
            console.log(this.state.items)
        }
    
    )
    
    

});
    }
    render(){
        return(
        <>
        <h1>recipe list</h1>
        <button onClick={this.recipelist}>click to see recipes</button>
        {
            this.state.issuccess?
            this.state.items.map((eachrecipe) => {
                return(
                    <>
                    <h4>{eachrecipe.id}</h4>
                    <h4>{eachrecipe.name}</h4>
                    <Imagecomponent src={eachrecipe.image}/>
                    <Heading1 title={"ingredients"}/>
                    <List list={eachrecipe.ingredients}/>
                    <Heading1 title={"instructions"}/>
                    <List list={eachrecipe.instructions}/>
                    
                    
                    </>
                )
            }):<h2>loading...</h2>
        }

        </>
    )}
}
export default Recipecomponent