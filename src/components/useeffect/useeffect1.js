// import axios from "axios"
// import { useEffect, useState } from "react"
// import ButtonComponent from "../button/button"
// import Imagecomponent from "../imagecomponent/imagecom"




// const Useeffect3 = () =>{
//     const [category,setcategory]=useState()
//     const [products,setproducts]=useState([])
//     // const [count2,setcount2]=useState(1)
//     useEffect(()=>{
//      console.log("useeffect")
//         recipelist()
//     },[category])
//     const  recipelist = async() =>{
//         const {data}= await axios.get(`https://fakestoreapi.com/products/category/${category}`)
//         console.log(data)
        
      
//         setproducts(data)
//     }
//     return(
//         <>
//          <ButtonComponent text="electronics" onSmash={()=>{setcategory( "electronics")}}/>
//         <ButtonComponent text="men's clothing" onSmash={()=>{setcategory( "men's clothing")}}/>
//         <ButtonComponent text="women's clothing" onSmash={()=>{setcategory("women's clothing")}}/>
//         <ButtonComponent text="jewellery" onSmash={()=>{setcategory( "jewelery")}}/>
//             {
//                 products.map((eachcategory)=>{
//                     const{id,category,image}=eachcategory
//                     return(
//                     <>
//                     <h1>{id}</h1>
//                     <h2>{category}</h2>
//                     <Imagecomponent src={image}/>
//                     </>
//                     )
//                 })
//             }



//         </>
//     )
// }
// export default Useeffect3
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonComponent from "../button/button";
import Imagecomponent from "../imagecomponent/imagecom";
import './Useeffect3.css';  // Importing the CSS file

const Useeffect3 = () => {
    const [category, setCategory] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("useEffect triggered");
        if (category) {
            recipelist();
        }
    }, [category]);

    const recipelist = async () => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <div className="button-container">
                <ButtonComponent text="Electronics" onSmash={() => { setCategory("electronics") }} />
                <ButtonComponent text="Men's Clothing" onSmash={() => { setCategory("men's clothing") }} />
                <ButtonComponent text="Women's Clothing" onSmash={() => { setCategory("women's clothing") }} />
                <ButtonComponent text="Jewellery" onSmash={() => { setCategory("jewelery") }} />
            </div>
            <div className="products-container">
                {products.map((eachProduct) => {
                    const { id, title, image,category, price, description, rating } = eachProduct;
                    return (
                        <div key={id} className="product-card">
                            <h2 className="product-title">{title}</h2>
                            <Imagecomponent src={image} alt={title} className="product-image" />
                            <h2 className="product-title">{category}</h2>
                            <p className="product-price">${price}</p>
                            <p className="product-description">{description}</p>
                            <p className="product-rating">Rating: {rating.rate} ({rating.count} reviews)</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Useeffect3;
