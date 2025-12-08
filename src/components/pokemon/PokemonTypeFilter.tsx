import { useState, useEffect } from 'react';
import { getPokemonTypes } from '../../api/pokemonApi';
import type { TypeListItem } from '../../types/Pokemon';
import { FilterContainer, FilterLabel, FilterButtons, FilterButton } from './PokemonTypeFilterStyle';

interface PokemonTypeFilterProps {
  onTypeChange: (selectedType: string | null) => void;
}

export const PokemonTypeFilter = ({ onTypeChange }: PokemonTypeFilterProps) => {
  const [types, setTypes] = useState<TypeListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await getPokemonTypes();
        // Filter out invalid types (like 'unknown' and 'shadow')
        const validTypes = response.results.filter(
          (type) => !['unknown', 'shadow'].includes(type.name)
        );
        setTypes(validTypes);
      } catch (error) {
        console.error('Error fetching types:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  const handleTypeClick = (typeName: string | null) => {
    if (selectedType === typeName) {
      setSelectedType(null);
      onTypeChange(null);
    } else {
      setSelectedType(typeName);
      onTypeChange(typeName);
    }
  };

  if (loading) {
    return <div>Loading types...</div>;
  }

  return (
    <FilterContainer>
      <FilterLabel>Filter by Type:</FilterLabel>
      <FilterButtons>
        <FilterButton $isActive={selectedType === null} onClick={() => handleTypeClick(null)}>
          All
        </FilterButton>
        {types.map((type) => (
          <FilterButton
            key={type.name}
            $isActive={selectedType === type.name}
            $typeName={type.name}
            onClick={() => handleTypeClick(type.name)}
          >
            {type.name}
          </FilterButton>
        ))}
      </FilterButtons>
    </FilterContainer>
  );
};
