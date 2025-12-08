import { useState } from 'react';
import { SearchContainer, SearchWrapper, SearchInput, SearchButton } from './PokemonSearchStyle';

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

  const handleSearch = () => {
    onSearchChange(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <SearchButton onClick={handleSearch} aria-label="Search">
          Search
        </SearchButton>
      </SearchWrapper>
    </SearchContainer>
  );
};
