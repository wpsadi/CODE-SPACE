import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function PokemonDetailHook(id){

    // const { id } = useParams();
    const [Poke, SetPoke] = useState({})
    const [ isLoading,setIsLoading] = useState(false)
    
    // console.log("hi")


    async function getDescPokemon(id) {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`
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
        setTypeAvailable(Poke.type  && Poke.type[0])
        setIsLoading(false)
        // console.log("hi")
        // console.log(Poke.type && Poke.type[0] || null)
        // pokemonListHook = usePokemonList(`https://pokeapi.co/api/v2/type/${(Poke.type  && Poke.type[0]) || TypeAvailable}`, true)
        // console.log(pokemonListHook)

        

        // setpokeListHook({...pokemonListHook,url:`https://pokeapi.co/api/v2/type/${Poke.type ? Poke.type[0] : 'fire'}`})console.log(Poke.type && Poke.type[0] || null)

        // console.log(api.types[0].type)
    }

    

    


    useEffect(() => {
        getDescPokemon(id)
    }, [isLoading])

    return [Poke, SetPoke]
}

export default PokemonDetailHook;