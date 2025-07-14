import React, { Component } from 'react';
import type { CardProps, CardState, TypeSlotProps } from '../../types/types';
import './card.css';
export class Card extends Component<CardProps, CardState> {
  state: CardState = {
    loading: false,
    error: null,
    pokemonDetails: null,
  };

  componentDidMount(): void {
    this.fetchPokemonDetails();
  }

  async fetchPokemonDetails(): Promise<void> {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(this.props.url);
      if (!response.ok) throw new Error('Failed to fetch details :(');

      const pokemonDetailsData = await response.json();

      this.setState({
        loading: false,
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
    const { loading, error, pokemonDetails } = this.state;

    return (
      <div className="wrapper-card">
        <div className="wrapper-img">
          <img src={imgSrc} className="card-img" alt={`${name} Image`} />
        </div>
        <h2 className="card-name">{name}</h2>
        <div className="wrapper-info">
          {loading && <p>Loading characteristics...</p>}
          {error && <p className="error">Error: {error}</p>}
          {pokemonDetails && !loading && !error && (
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
