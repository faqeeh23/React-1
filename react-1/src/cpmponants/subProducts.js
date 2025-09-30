import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../style/subProducts.css"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function SubProducts() {

    const location = useLocation();
    const [productFromMain , setProductFromMain] = React.useState(location.state.item)
    console.log(productFromMain);

    const { list, startIndex } = location.state ;   
    const [index, setIndex] = React.useState(startIndex);

    const lastIndex = list.length -1

    const handleNext = () => {
        if (index === lastIndex) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    const handlePrev = () => {
        if (index === 0) {
            setIndex(lastIndex)
        } else {
            setIndex(index - 1)
        }
    }
    const current = list[index];
    
    return (
            <div className='subProducts-continer'>
                <button onClick={handleNext} className='btn-move'>
                    <GoArrowLeft size={30} />
                </button>
                <div className="subProducts">
                    <div className='img-continer'>
                        <img src={current.img} alt={current.title}></img>
                    </div>
                    <div className='details-continer'>
                        <h1>{current.title}</h1>
                        <p>{current.details}</p>
                        <div className="btn-back">
                            <Link to='/products'>Back</Link>
                        </div>
                    </div>
                </div>
                <button onClick={handlePrev} className='btn-move'>
                    <GoArrowRight size={30}/>
                </button>
            </div>
    )
}