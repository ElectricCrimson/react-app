import React, { Component } from 'react';
import { Card } from '../card/card';
import './cardList.css';
import type { PokemonsArrProps } from '../../types/types';

export class CardList extends Component<PokemonsArrProps> {
  pokemonImageSrc(id: number): string {
    const imgUrl: string =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    return `${imgUrl}${id}.png`;
  }

  render(): React.ReactNode {
    return (
      <div className="wrapper-list">
        {this.props.pokemons.map(
          (pokemon: { name: string; url: string }, index: number) => (
            <Card
              key={index}
              imgSrc={this.pokemonImageSrc(index + 1)}
              name={pokemon.name}
              url={pokemon.url}
            />
          )
        )}
      </div>
    );
  }
}
