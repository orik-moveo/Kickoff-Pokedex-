import { useState, useEffect } from 'react';
import { getPokemonTypes } from '../../api/pokemonApi';
import type { TypeListItem } from '../../types/Pokemon';
import { FilterSelect } from './PokemonTypeFilterStyle';

interface PokemonTypeFilterProps {
  onTypeChange: (selectedType: string | null) => void;
}

export const PokemonTypeFilter = ({ onTypeChange }: PokemonTypeFilterProps) => {
  const [types, setTypes] = useState<TypeListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('');

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

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedType(value);
    onTypeChange(value === '' ? null : value);
  };

  if (loading) {
    return <FilterSelect disabled><option>Loading types...</option></FilterSelect>;
  }

  return (
    <FilterSelect value={selectedType} onChange={handleTypeChange}>
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type.name} value={type.name}>
          {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
        </option>
      ))}
    </FilterSelect>
  );
};
