import { useEffect, useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"
import "./Pokedex.css"
import PokemonDetails from "../PokemonDetails/PokemonDetails"
function Pokedex() {
    const [srch,setSrch] = useState("")

    useEffect(()=>{

    },[srch])
    return (
        <div className="pokedex-wrapper">
            <Search updateSrch={setSrch}/>
            {srch.length==0 && <PokemonList/> || <PokemonDetails key={srch} pokemonName={srch}/>}
        </div>
    )
}

export default Pokedex