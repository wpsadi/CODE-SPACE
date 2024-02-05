import axios from "axios";
import { useState,useEffect } from "react";

function usePokemonList(url,type){
    const [pokestate, setPokestate] = useState({
        next: "",
        prev: "",
        apiURL: url,
        offset:0,
        pokemonList: [],
        loading: "true"
    })


    async function downloadPokemon() {

        const response = await axios.get(pokestate.apiURL);
        


        if(type == true){
            let res = await response.data.pokemon;
            // console.log(res)
            let typeList = res.slice(0,5)
            // console.log(typeList)
            setPokestate((state)=>({
                ...state,
                loading: false,
                pokemonList : typeList
            }))

        }
        else{
            let res = response.data.results
            const PokemonResultPromise = res.map((item) => axios.get(item['url']))
            const pokemonData = await axios.all(PokemonResultPromise);
    
            // console.log(pokemonData)'
            // let det = new Array();
            let det = pokemonData.map((pokemonD) => {
                const pokemon = pokemonD.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_default,
                    type: JSON.stringify(pokemon.types)
                }
    
            })
    
    
            // setPokestate({
            //     ...pokestate,
            //     next:response.data.next,
            //     prev:response.data.previous,
            //     loading: false,
            //     pokemonList: det
            // });
    
            //I can only chnge state only boince in a function, but to do this multiple time i can use arrow function like below
            setPokestate((state)=>({
                ...pokestate,
                loading: false,
                pokemonList: det
            }));
            setPokestate((state)=>({
                ...state,
                next:response.data.next,
                prev:response.data.previous,
            }));
    
        }

        // return res;

    }

    useEffect(() => {
        setPokestate({
            ...pokestate,
            loading: "true"
        });
        const result = downloadPokemon()
    }, [pokestate.apiURL])

    return [setPokestate,pokestate]
}
export default usePokemonList;