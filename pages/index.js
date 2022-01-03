import React from "react";
import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const pokemonNumber = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();

  return (
    <li>
      <Link href={`pokemones/${pokemonNumber}`}>{pokemon.name}</Link>
    </li>
  );
};

function Home({ pokemones }) {
  return (
    <div>
      <p data-testid="titulo">Mi App de Pokemones</p>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}
export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
