import { Link } from "react-router-dom";
import "./Pokemon.css"

function Pokemon({ src, type, name, index}) {

    return (

        <div className="card">
            <Link to={`/pokemon/${index}`} className="anchor">
                <div className="image">
                    <img src={src} alt="NA" />
                </div>
                <div className="top-box">
                    <div className="name">{name}</div>
                    {/* <div className="desc">{type}</div> */}
                </div>
            </Link>
        </div >

        


    )
}

export default Pokemon;