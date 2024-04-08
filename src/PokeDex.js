import React, { useState } from "react";
import { useAxios } from "./useAxios";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  // Using the useAxios hook with the base URL for the Pokémon API
  const [pokemon, addPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  // Updated to pass only the name (endpoint) to addPokemon
  const addPokemonByName = async name => {
    await addPokemon(name);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemonByName} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;