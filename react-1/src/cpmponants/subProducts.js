import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../style/subProducts.css"

export default function SubProducts() {

    const location = useLocation();
    const [productFromMain , setProductFromMain] = React.useState(location.state)
    console.log(productFromMain);
    const [index , setIndex] = React.useState(productFromMain.id)
    const moveNext = () => {
        if(index < 20){
            setIndex(prevIndex => prevIndex + 1)
            setProductFromMain(location.state[index])
        }
    }
    return (
            <div className='subProducts-continer'>
                <div className='move'>Next</div>
                <div className="subProducts">
                    <div className='img-continer'>
                        <img src={productFromMain.img} alt={productFromMain.name}></img>
                    </div>
                    <div className='details-continer'>
                        <h1>{productFromMain.title}</h1>
                        <p>{productFromMain.details}</p>
                        <div className="btn-back">
                            <Link to='/products'>Back</Link>
                        </div>
                    </div>
                </div>
                <div className='move' onClick={moveNext}>Next</div>
            </div>
    )
}