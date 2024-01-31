import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function PokemonDetailHook(id){

    // const { id } = useParams();
    const [Poke, SetPoke] = useState({})


    async function getDescPokemon(id) {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`
        let api = await axios.get(url)
        api = api.data;
        

        // console.log(api.data)
        SetPoke({
            name: api.name,
            image: api.sprites.other.dream_world.front_default,
            weight: api.weight,
            height: api.height,
            type: api.types.map((item, index) => item.type.name)
        })

        setpokeListHook({...pokemonListHook,url:`https://pokeapi.co/api/v2/type/${Poke.type ? Poke.type[0] : 'fire'}`})

        // console.log(api.types[0].type)
    }

    const [setpokeListHook, pokemonListHook ] =usePokemonList(`https://pokeapi.co/api/v2/type/${Poke.type ? Poke.type[0] : 'fire'}`, true)


    useEffect(() => {
        getDescPokemon(id)
    }, [isLoading])
}

export default PokemonDetailHook;