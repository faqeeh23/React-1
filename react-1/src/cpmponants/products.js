import React  from "react"
import "../style/products.css"
export default function Products() {
    
    const [showImage, setShowImage] = React.useState('yes')
    const handelcklick = () => {
        setShowImage(prevShowImage => prevShowImage === 'yes' ? 'no' : 'yes')
        
    }

    return ( 
        <div className="products">
            <h1></h1>
            <h1>Our Products </h1>
            <button onClick={handelcklick} className="btn_show">{showImage === 'yes' ? "Hide Products" : "Show Products"}</button>
            {showImage == 'yes' &&  (
                <div className="images"> 
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"></img>
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"></img>
                </div>
            )
            }
        </div>
    )
}