import { useState } from "react";
import "./Search.css"
import useDebounce from "../../hooks/useDebounce"

function Search({updateSrch}){
    const debounceCb = useDebounce((evt)=>updateSrch(evt.target.value))
    const [srch,setSrch] = useState("");

    return (
        <>
        <input type="text" placeholder="search here..." id="srch" onChange={debounceCb}/>

        </>
    )
}

export default Search;