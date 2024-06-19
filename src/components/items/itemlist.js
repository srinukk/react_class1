// import axios from "axios"
// import { useEffect, useState } from "react"
// import Imagecomponent from "../imagecomponent/imagecom"




// const Itemslist = () =>{
//     const [products,setproducts]=useState([])
//     useEffect(()=>{
//         recipelist();
//     },[])

//   const  recipelist = async() =>{
//         const {data}= await axios.get('https://fakestoreapi.com/products')
//         console.log(data)
        
      
//         setproducts(data)
// }
//     return(
//         <>
//         <h1>productlist</h1>
//         {
//             products.map((eachproduct)=>{
//                 const {name,image,id}=eachproduct
//                 return(
//                     <>
//                     <h1>{id}</h1>
//                     <h2>{name}</h2>
//                     <Imagecomponent src={image}/>
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }
// export default Itemslist
import axios from "axios";
import { useEffect, useState } from "react";
import Imagecomponent from "../imagecomponent/imagecom";
import "./Itemlist.css";  // Importing the CSS file
// import ButtonComponent from "../button/button";
import { Link } from "react-router-dom";

const Itemslist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        recipelist();
    }, []);

    const recipelist = async () => {
        try {
            const { data } = await axios.get ("https://fakestoreapi.com/products"
            );
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <h1 className="title">Product List</h1>
            <div className="products-container">
                {products.map((eachProduct) => {
                    const { id, title, image,category, price, description, rating } = eachProduct;
                    return (
                        <div key={id} className="product-card">
                            <h2 className="product-title">{title}</h2>
                            <Imagecomponent src={image} alt={title} className="product-image" />
                            <h3 className="product-title">{category}</h3>
                            <p className="product-price">${price}</p>
                            <p className="product-description">{description}</p>
                            <p className="product-rating">Rating: {rating.rate} ({rating.count} reviews)</p>
                            {/* <ButtonComponent text="view for more" OnSmash={<Link to={`${category}/${id}`}>view for more</Link>}/> */}
                            <button 
                             ><Link to={`${category}/${id}`} >view for more</Link></button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Itemslist;
