import "../style/home.css"
import videoFile from "../video/T3 Smartwatch Advertising Video.mp4"
export default function Home() {
    return (
        <div className="Home">
            <div className="left">
                <h1>Discover our new collection for Fall 2025</h1>
                <p></p>
            </div>
            <div className="right">
                <video src={videoFile} autoPlay loop muted></video>
            </div>
        </div>
    )
}