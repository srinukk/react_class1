import axios from "axios"
import { useEffect, useState } from "react"
import Imagecomponent from "../imagecomponent/imagecom"
import ButtonComponent from "../button/button"




const UseEffect2 = () =>{
    const [count,setcount]=useState(1)
    const [products,setproducts]=useState({})
    // const [count2,setcount2]=useState(1)
    useEffect(()=>{
     console.log("useeffect")
        recipelist()
    },[count])
    const  recipelist = async() =>{
        const {data}= await axios.get(`https://fakestoreapi.com/products/${count}`)
        console.log(data)
        
      
        setproducts(data)
    }
    return(
        <>
        {/* <h1>{count}</h1> */}
      
        <ButtonComponent text="product-1" onSmash={()=>{setcount(1)}}/>
        <ButtonComponent text="product-2" onSmash={()=>{setcount(2)}}/>
        <ButtonComponent text="product-3" onSmash={()=>{setcount(3)}}/>
        <ButtonComponent text="product-4" onSmash={()=>{setcount(4)}}/>
        <ButtonComponent text="product-5" onSmash={()=>{setcount(5)}}/>
        <ButtonComponent text="product-6" onSmash={()=>{setcount(6)}}/>
        <ButtonComponent text="product-7" onSmash={()=>{setcount(7)}}/>
        <ButtonComponent text="product-8" onSmash={()=>{setcount(8)}}/>
        <ButtonComponent text="product-9" onSmash={()=>{setcount(9)}}/>
        <ButtonComponent text="product-10" onSmash={()=>{setcount(10)}}/>
        <ButtonComponent text="product-11" onSmash={()=>{setcount(11)}}/>
        <ButtonComponent text="product-12" onSmash={()=>{setcount(12)}}/>
        <ButtonComponent text="product-13" onSmash={()=>{setcount(13)}}/>
        <ButtonComponent text="product-14" onSmash={()=>{setcount(14)}}/>
        <ButtonComponent text="product-15" onSmash={()=>{setcount(15)}}/>
        <ButtonComponent text="product-16" onSmash={()=>{setcount(16)}}/>
        <ButtonComponent text="product-17" onSmash={()=>{setcount(17)}}/>
        <ButtonComponent text="product-18" onSmash={()=>{setcount(18)}}/>
        <ButtonComponent text="product-19" onSmash={()=>{setcount(19)}}/>
        <ButtonComponent text="product-20" onSmash={()=>{setcount(20)}}/>
        {/* <h1>{count}</h1> */}
        {/* <button onClick={()=>{if(count>0){setcount(count-1)}else{alert("count already 0")}}}>deccrease count</button> */}
        {
            <>
            <h1>{products.id}</h1>
            <h2>{products.category}</h2>
            <Imagecomponent src={products.image}/>
            </>
        }
        </>
    )
}
export default UseEffect2