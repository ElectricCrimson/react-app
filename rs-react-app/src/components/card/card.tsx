import React, { Component } from 'react';
import type { CardProps, CardState, TypeSlotProps } from '../../types/types';
import './card.css';

export class Card extends Component<CardProps, CardState> {
  state: CardState = {
    error: null,
    pokemonDetails: null,
  };

  componentDidMount(): void {
    this.fetchPokemonDetails();
  }

  async fetchPokemonDetails(): Promise<void> {
    this.setState({ error: null });
    try {
      const response = await fetch(this.props.url);
      if (!response.ok) throw new Error('Failed to fetch details :(');

      const pokemonDetailsData = await response.json();

      this.setState({
        pokemonDetails: {
          height: pokemonDetailsData.height / 10,
          weight: pokemonDetailsData.weight / 10,
          types: pokemonDetailsData.types.map(
            (typeSlot: TypeSlotProps) => typeSlot.type.name
          ),
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log('Unknown error');
      }
    }
  }

  render(): React.ReactNode {
    const { imgSrc, name } = this.props;
    const { error, pokemonDetails } = this.state;

    return (
      <div className="wrapper-card">
        <div className="wrapper-img">
          <img src={imgSrc} className="card-img" alt={`${name} Image`} />
        </div>
        <h2 className="card-name">{name}</h2>
        <div className="wrapper-info">
          {error && <p className="error">Error: {error}</p>}
          {pokemonDetails && !error && (
            <>
              <p className="card-info">Height: {pokemonDetails.height} m</p>
              <p className="card-info">Weight: {pokemonDetails.weight} kg</p>
              <p className="card-info">
                Types: {pokemonDetails.types.join(', ')}
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}
