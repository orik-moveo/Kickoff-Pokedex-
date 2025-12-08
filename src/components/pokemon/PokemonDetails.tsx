import { useFavoritesContext } from '../../context/FavoritesContext';
import type { Pokemon } from '../../types/Pokemon';
import {
  DetailsContainer,
  HeaderSection,
  TitleSection,
  PokemonName,
  PokemonId,
  HeartButton,
  ImageSection,
  PokemonImage,
  TypesContainer,
  TypeBadge,
  Description,
  StatsSection,
  StatsTitle,
  StatItem,
  StatLabel,
  StatBarContainer,
  StatBar,
} from './PokemonDetailsStyle';

interface PokemonDetailsProps {
  pokemon: Pokemon;
  description: string;
}

export const PokemonDetails = ({ pokemon, description }: PokemonDetailsProps) => {
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const favorite = isFavorite(pokemon.id);

  const handleHeartClick = () => {
    toggleFavorite(pokemon.id);
  };

  const imageUrl =
    pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <DetailsContainer>
      <HeaderSection>
        <TitleSection>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonId>#{String(pokemon.id).padStart(3, '0')}</PokemonId>
        </TitleSection>
        <HeartButton
          $isFavorite={favorite}
          onClick={handleHeartClick}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '❤️' : '🤍'}
        </HeartButton>
      </HeaderSection>

      <ImageSection>
        <PokemonImage src={imageUrl} alt={pokemon.name} />
      </ImageSection>

      <TypesContainer>
        {pokemon.types.map((type) => (
          <TypeBadge key={type.slot} $typeName={type.type.name}>
            {type.type.name}
          </TypeBadge>
        ))}
      </TypesContainer>

      {description && <Description>{description}</Description>}

      <StatsSection>
        <StatsTitle>Stats</StatsTitle>
        {pokemon.stats.map((stat) => (
          <StatItem key={stat.stat.name}>
            <StatLabel>
              <span>{stat.stat.name.replace('-', ' ')}</span>
              <span>{stat.base_stat}</span>
            </StatLabel>
            <StatBarContainer>
              <StatBar $value={stat.base_stat} />
            </StatBarContainer>
          </StatItem>
        ))}
      </StatsSection>
    </DetailsContainer>
  );
};
