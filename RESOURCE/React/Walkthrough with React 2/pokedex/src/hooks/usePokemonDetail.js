import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function PokemonDetailHook(id,pokemonName){

    // const { id } = useParams();
    // console.log(pokemonName)
    const [Poke, SetPoke] = useState({})
    const [ isLoading,setIsLoading] = useState(false)
    
    // console.log("hi")


    async function getDescPokemon(id) {
        let url

        if (pokemonName != undefined){
            url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        }
        else{
            url = `https://pokeapi.co/api/v2/pokemon/${id}`
        }
        
        let api = await axios.get(url)
        api = api.data;
        // console.log("hi")
        let similarPokemon = await axios.get(`https://pokeapi.co/api/v2/type/${api.types[0].type.name}`,true)
        let pokemonList = (similarPokemon.data.pokemon.slice(0,5))
        

        // console.log(api.data)
        SetPoke({
            name: api.name,
            image: api.sprites.other.dream_world.front_default,
            weight: api.weight,
            height: api.height,
            pokemonList,
            type: api.types.map((item, index) => item.type.name)
        })
        setIsLoading(false)

    }

    

    


    useEffect(() => {
        getDescPokemon(id)
    }, [isLoading])

    return [Poke, SetPoke]
}

export default PokemonDetailHook;