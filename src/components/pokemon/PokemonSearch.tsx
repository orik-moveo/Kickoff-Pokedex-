import { useState } from 'react';
import { SearchContainer, SearchInput } from './PokemonSearchStyle';

interface PokemonSearchProps {
  onSearchChange: (searchTerm: string) => void;
}

export const PokemonSearch = ({ onSearchChange }: PokemonSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search by name or number..."
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};
