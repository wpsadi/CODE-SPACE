import { useEffect } from "react"
import axios from "axios";
import { useState } from "react";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {

    const {setPokestate,pokestate} = usePokemonList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",false)

    return (
        <>
            <div className="card-box">
                {(pokestate.loading) ? "Loading" : (pokestate.pokemonList).map((pokemon, idx) => <Pokemon key={idx} index={pokestate.offset+idx + 1} name={pokemon.name} src={pokemon.image} type={pokemon.type} />)}
            </div>
            <div className="btnss">
                <button type="button" className="btn" disabled={(pokestate.prev == null)} onClick={() => setPokestate({ ...pokestate, apiURL: pokestate.prev,offset:pokestate.offset-20 })}>Prev</button>
                <button type="button" className="btn" disabled={(pokestate.next == null)} onClick={() => setPokestate({ ...pokestate, apiURL: pokestate.next ,offset:pokestate.offset+20})}>Next</button>
            </div>
        </>
    )
}

export default PokemonList