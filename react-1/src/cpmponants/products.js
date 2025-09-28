import React  from "react"
import "../style/products.css"
import { Link } from "react-router-dom"
import camera from "../image/camera.jpg"
import headphone from "../image/headphone.jpg"
import smartwach from "../image/smartwach.jpg"
import AppleSmartWatch from "../image/AppleSmartWatch.jpg"
import gamingHeadphone from "../image/gamingHeadphone.jpg"
import { CiSearch } from "react-icons/ci";

export default function Products() {
    
    const [showImage, setShowImage] = React.useState('yes')
    const handelcklick = () => {
        setShowImage(prevShowImage => prevShowImage === 'yes' ? 'no' : 'yes')
        
    }
    var subProducts = [
        {id :1 , name :"Camera" ,img:camera, price:100 , details:"Camera"},
        {id :2 , name :"Headphone" ,img:headphone, price:200 , details:"headphone"},
        {id :3 , name :"Smart wach" ,img:smartwach, price:300 , details:"smartwach"},
        {id :4 , name :"Apple smart wach" ,img:AppleSmartWatch, price:400 , details:"apple smartwach"},
        {id :5 , name :"Gaming Headphone" ,img:gamingHeadphone, price:500 , details:"gaming headphone"},
    ]

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = (event) => {
        const searchTetm = event.target.value;
        setSearchTerm(searchTetm);

        const filtered = subProducts.filter((item) =>
            item.name.toLowerCase().includes(searchTetm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    const [filteredProducts, setFilteredProducts] = React.useState(subProducts);


    return ( 
        <div className="products">
            <div className="seach">
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
            </div>
            <div id="subProducts">
                <ul>
                    {filteredProducts.map((item) => (
                        <li key={item.id}>
                            <img src={item.img}  alt={item.name} />
                            <h4>{item.name}</h4>
                            <div className="btn-details">
                                <Link to="/subproducts" state={item}>Details</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <hr></hr>
            <div className="main-products">
                <h1>Top Products </h1>
                <button onClick={handelcklick} className="btn_show">{showImage === 'yes' ? "Hide Products" : "Show Products"}</button>
                {showImage == 'yes' &&  (
                    <div className="product-images"> 
                        <img src={smartwach}></img>
                        <img src={headphone}></img>
                    </div>
                )
                }
            </div>
        </div>    
    )
}