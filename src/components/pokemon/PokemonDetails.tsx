import { useFavoritesContext } from '../../context/FavoritesContext';
import type { Pokemon } from '../../types/Pokemon';
import {
  DetailsContainer,
  ContentWrapper,
  LeftSection,
  RightSection,
  PokemonId,
  HeartButton,
  PokemonImage,
  PokemonName,
  TypesContainer,
  TypeBadge,
  DescriptionTitle,
  Description,
  StatsSection,
  StatsTitle,
  StatsGrid,
  StatCell,
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

  // Organize stats according to the requested format
  const hp = pokemon.stats.find((s) => s.stat.name === 'hp');
  const attack = pokemon.stats.find((s) => s.stat.name === 'attack');
  const defense = pokemon.stats.find((s) => s.stat.name === 'defense');
  const specialAttack = pokemon.stats.find((s) => s.stat.name === 'special-attack');
  const specialDefense = pokemon.stats.find((s) => s.stat.name === 'special-defense');
  const speed = pokemon.stats.find((s) => s.stat.name === 'speed');
  const total = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return (
    <DetailsContainer>
      <PokemonId>#{String(pokemon.id).padStart(3, '0')}</PokemonId>
      <HeartButton
        $isFavorite={favorite}
        onClick={handleHeartClick}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '✕' : '♡'}
      </HeartButton>

      <ContentWrapper>
        <LeftSection>
          <PokemonImage src={imageUrl} alt={pokemon.name} />
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesContainer>
            {pokemon.types.map((type) => (
              <TypeBadge key={type.slot} $typeName={type.type.name}>
                {type.type.name}
              </TypeBadge>
            ))}
          </TypesContainer>
        </LeftSection>

        <RightSection>
          {description && (
            <>
              <DescriptionTitle>Description</DescriptionTitle>
              <Description>{description}</Description>
            </>
          )}

          <StatsSection>
            <StatsTitle>Stats:</StatsTitle>
            <StatsGrid>
              <StatCell>HP:</StatCell>
              <StatCell>{hp?.base_stat || 0}</StatCell>
              <StatCell>Special Atk:</StatCell>
              <StatCell>{specialAttack?.base_stat || 0}</StatCell>
              <StatCell>Total:</StatCell>
              <StatCell>{total}</StatCell>

              <StatCell>Attack:</StatCell>
              <StatCell>{attack?.base_stat || 0}</StatCell>
              <StatCell>Special Def:</StatCell>
              <StatCell>{specialDefense?.base_stat || 0}</StatCell>
              <StatCell></StatCell>
              <StatCell></StatCell>

              <StatCell>Defense:</StatCell>
              <StatCell>{defense?.base_stat || 0}</StatCell>
              <StatCell>Speed:</StatCell>
              <StatCell>{speed?.base_stat || 0}</StatCell>
              <StatCell></StatCell>
              <StatCell></StatCell>
            </StatsGrid>
          </StatsSection>
        </RightSection>
      </ContentWrapper>
    </DetailsContainer>
  );
};
