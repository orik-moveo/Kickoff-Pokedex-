import { PokemonCard } from './PokemonCard';
import type { Pokemon } from '../../types/Pokemon';
import { Grid } from './PokemonListStyle';

interface PokemonListProps {
  pokemon: Pokemon[];
}

export const PokemonList = ({ pokemon }: PokemonListProps) => {
  if (pokemon.length === 0) {
    return <div>No Pokémon found.</div>;
  }

  return (
    <Grid>
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </Grid>
  );
};
