import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../style/subProducts.css"

export default function SubProducts() {

    const location = useLocation();
    const [productFromMain , setProductFromMain] = React.useState(location.state)
    console.log(productFromMain);
    return ( 
            <div className="subProducts">
                <div className='img-continer'>
                    <img src={productFromMain.img} alt={productFromMain.name}></img>
                </div>
                <div className='details-continer'>
                    <h1>{productFromMain.name}</h1>
                    <h2>Price: ${productFromMain.price}</h2>
                    <p>{productFromMain.details}</p>
                    <div className="btn-back">
                        <Link to='/products'>Back</Link>
                    </div>
                </div>
            </div>
            
    )
}