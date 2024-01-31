import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonDetails() {
        const {id} = useParams();
    



    // console.log(Poke.type[0])

   

    // console.log((pokestate.typeList)[2].pokemon.name)

    return (
        <>
            <div>Name : {Poke.name}</div>
            <div>Image : <img src={Poke.image} alt="NA" /></div>
            <div>Weight : {Poke.weight}</div>
            <div>Height : {Poke.height}</div>
            <div>Type : {Poke.type && Poke.type.map((t) => <div key={t}>{t}</div>)}</div>
            <br /><br /><br />

            {Poke.type && <>
                <div>More {Poke.type[0]} type pokemon</div>
            <div>
                {pokestate.typeList && pokestate.typeList.map((item,index)=> <li>{item.pokemon.name}</li>)}
            </div>
            </>}
 
        </>
    )
}

export default PokemonDetails;