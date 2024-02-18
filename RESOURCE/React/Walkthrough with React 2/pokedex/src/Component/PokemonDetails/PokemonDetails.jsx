import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemonList from "../../hooks/usePokemonList";
import  PokemonDetailHook from "../../hooks/usePokemonDetail"

function PokemonDetails({pokemonName}) {
        const {id} = useParams();

        const [Poke, SetPoke] = PokemonDetailHook(id,pokemonName)
        



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
                {Poke.pokemonList && Poke.pokemonList.map((item,index)=> <li key={item.pokemon.name}>{item.pokemon.name}</li>)}
            </div>
            </>}
 
        </>
    )
}

export default PokemonDetails;