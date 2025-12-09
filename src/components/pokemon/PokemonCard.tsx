import { useNavigate } from 'react-router-dom';
import type { Pokemon } from '../../types/Pokemon';
import {
  Card,
  ImageContainer,
  PokemonImage,
  CardInfo,
  PokemonName,
  PokemonId,
} from './PokemonCardStyle';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const imageUrl =
    pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <Card onClick={handleCardClick}>
      <PokemonId>#{String(pokemon.id).padStart(3, '0')}</PokemonId>
      <ImageContainer>
        <PokemonImage src={imageUrl} alt={pokemon.name} />
      </ImageContainer>
      <CardInfo>
        <PokemonName>{pokemon.name}</PokemonName>
      </CardInfo>
    </Card>
  );
};
