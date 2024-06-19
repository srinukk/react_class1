// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import Imagecomponent from "../imagecomponent/imagecom";



// const Productdetailscomponent = () =>{
//     const paramsurl= useParams();
//     const {productid}=paramsurl
//     // console.log(paramsurl)
//     const [productdetails,setproductdetails]= useState({})
//     useEffect(()=>{
//       eachProductdetails();
//     },[])
//     const eachProductdetails = async () =>{
//         const {data} = await axios.get(`https://fakestoreapi.com/products/${productid}`)
//         // console.log(data)
//         setproductdetails(data)
//     }
//     return(
//         <>
//         <h1>productdetails</h1>
//         <h1>{productdetails.title}</h1>
//         <Imagecomponent src={productdetails.image}/>

        
//         </>
//     )
        
// }
// export default Productdetailscomponent
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Imagecomponent from "../imagecomponent/imagecom";
import './productdetailes.css';

const Productdetailscomponent = () => {
    const paramsurl = useParams();
    const { productid } = paramsurl;
    const [productdetails, setproductdetails] = useState({});

    useEffect(() => {
        eachProductdetails();
    }, []);

    const eachProductdetails = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${productid}`);
        setproductdetails(data);
    };

    return (
        <div className="product-details-container">
            <h1 className="product-title">{productdetails.title}</h1>
            <div className="product-details">
                <Imagecomponent src={productdetails.image} className="product-image"/>
                <div className="product-info">
                    <p className="product-category"><strong>Category:</strong> {productdetails.category}</p>
                    <p className="product-price"><strong>Price:</strong> ${productdetails.price}</p>
                    <p className="product-description"><strong>Description:</strong> {productdetails.description}</p>
                    <p className="product-rating"><strong>Rating:</strong> {productdetails.rating?.rate} ({productdetails.rating?.count} reviews)</p>
                </div>
            </div>
        </div>
    );
};

export default Productdetailscomponent;
