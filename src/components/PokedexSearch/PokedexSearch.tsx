import React, { useEffect, useState } from "react";
import { Pokemon } from "../client/PokemonApi";

export default function PokedexSearch() {
  const id = React.useId();
  const [pokeSearch, setPokeSearch] = useState("");
  const [pokeResult, setPokeResult] = useState("");
  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setPokeSearch(event.target.value);
  const fireSearch = () => {
    const pokimon = new Pokemon();
    pokimon.getPokemon(pokeSearch).then((r) => {
      setPokeResult(r);
    });
  };
  return (
    <div className="content-container items-center py-2">
      <div>
        <label htmlFor={id} className="form-label">
          Pokemon Search
        </label>
        <input
          type={"text"}
          onChange={handleSearch}
          id={id}
          className="form-text-input"
        />
        <button type={"button"} onClick={fireSearch}>
          Search
        </button>
        <pre className="flex-wrap">{JSON.stringify(pokeResult, null, 1)}</pre>
      </div>
    </div>
  );
}
