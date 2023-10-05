import React, { useEffect, useState } from "react";
import { API } from "./API";


const apiUrl = `${API}/products`

function Products (){
    const [products, setProduct] = useState([])

    useEffect(()=>{
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.log("some issue with backend connectivity."))
    },[])
    // const [id, name, image_url, price] = products;
    return(
        <div>
            <h1>Product Lists</h1>
            <div className="container">
                    <div className="row">
                    {
                        products.map( product =>{
                            const {id, name, image_url, price} = product;
                            const formatedPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
                            return(
                                <div key={id} className="col-sm fade-in-out">
                                    <img src={image_url} alt='product' style={{height: 200, width: 300}} /><br />
                                
                                    <br />
                                    <strong>{name}</strong><br />
        
                                    <strong>{formatedPrice} </strong>
                                </div>
                            )
                        })
            }
                    </div>
                </div>
            

        </div>
    )
}

export default Products;