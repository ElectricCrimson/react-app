import React, { Component } from 'react';
import './card.css';
import pokeball from '../../assets/pokeball.png';

type CardProps = {
  imgSrc?: string;
  name: string;
  height: string;
  weight: string;
  types: string;
};

export class Card extends Component<CardProps> {
  render(): React.ReactNode {
    const { name, height, weight, types } = this.props;
    return (
      <div className="wrapper-card">
        <div className="wrapper-img">
          <img src={pokeball} className="card-img" alt="Pokemon Image" />
        </div>
        <h2 className="card-name">{name}</h2>
        <div className="wrapper-info">
          <p className="card-info">Height: {height}</p>
          <p className="card-info">Weight: {weight}</p>
          <p className="card-info">Types: {types}</p>
        </div>
      </div>
    );
  }
}
