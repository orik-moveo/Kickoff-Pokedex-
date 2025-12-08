import { useNavigate } from 'react-router-dom';
import { useFavoritesContext } from '../../context/FavoritesContext';
import type { Pokemon } from '../../types/Pokemon';
import {
  Card,
  ImageContainer,
  PokemonImage,
  CardInfo,
  PokemonName,
  PokemonId,
  TypesContainer,
  TypeBadge,
  HeartButton,
} from './PokemonCardStyle';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const favorite = isFavorite(pokemon.id);

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(pokemon.id);
  };

  const imageUrl =
    pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <Card onClick={handleCardClick}>
      <HeartButton
        $isFavorite={favorite}
        onClick={handleHeartClick}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '❤️' : '🤍'}
      </HeartButton>
      <ImageContainer>
        <PokemonImage src={imageUrl} alt={pokemon.name} />
      </ImageContainer>
      <CardInfo>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonId>#{String(pokemon.id).padStart(3, '0')}</PokemonId>
        <TypesContainer>
          {pokemon.types.map((type) => (
            <TypeBadge key={type.slot} $typeName={type.type.name}>
              {type.type.name}
            </TypeBadge>
          ))}
        </TypesContainer>
      </CardInfo>
    </Card>
  );
};
