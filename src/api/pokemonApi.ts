import axios from 'axios';
import type {
  PokemonListResponse,
  Pokemon,
  TypeResponse,
  PokemonSpecies,
} from '../types/Pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getPokemonList = async (
  limit: number = 20,
  offset: number = 0
): Promise<PokemonListResponse> => {
  try {
    const response = await api.get<PokemonListResponse>(
      `/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (idOrName: string | number): Promise<Pokemon> => {
  try {
    const response = await api.get<Pokemon>(`/pokemon/${idOrName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pokemon details for ${idOrName}:`, error);
    throw error;
  }
};

export const getPokemonSpecies = async (idOrName: string | number): Promise<PokemonSpecies> => {
  try {
    const response = await api.get<PokemonSpecies>(`/pokemon-species/${idOrName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pokemon species for ${idOrName}:`, error);
    throw error;
  }
};

export const getPokemonTypes = async (): Promise<TypeResponse> => {
  try {
    const response = await api.get<TypeResponse>('/type');
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemon types:', error);
    throw error;
  }
};
