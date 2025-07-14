import React, { Component } from 'react';
import { Card } from '../card/card';
import './cardList.css';

export class CardList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount(): void {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then((response) => response.json())
      .then((response) => this.setState({ pokemons: response.results }));
  }

  pokemonImageSrc(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  render(): React.ReactNode {
    return (
      <div className="wrapper-list">
        {this.state.pokemons.map(
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
