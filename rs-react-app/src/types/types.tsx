export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export type CardProps = {
  imgSrc: string;
  name: string;
  url: string;
};

export type CardDetailsProps = {
  height: number;
  weight: number;
  types: string[];
};

export type CardState = {
  error: string | null;
  pokemonDetails: CardDetailsProps | null;
};

export type TypeSlotProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type ErrorBoundaryProps = {
  children?: React.ReactNode;
};

export type PokemonProps = {
  name: string;
  url: string;
};

export type PokemonsArrProps = {
  pokemons: PokemonProps[];
};
