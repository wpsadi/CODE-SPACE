import { FaRegCircle } from "react-icons/fa"
import { FaXmark,FaArrowsRotate } from "react-icons/fa6";


function Icon({name}){
    if (name == "circle"){
        return <FaRegCircle/>
    }
    else if (name == "cross"){
        return <FaXmark/>
    }
    else{
        return <FaArrowsRotate/>
    }
}

export default Icon;