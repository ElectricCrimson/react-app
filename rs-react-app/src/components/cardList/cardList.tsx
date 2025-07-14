import React, { Component } from 'react';
import { Card } from '../card/card';
import './cardList.css';

export class CardList extends Component {
  render(): React.ReactNode {
    return (
      <div className="wrapper-list">
        <Card name="Name" height="1.5m" weight="16kg" types="fire" />
        <Card name="Name2" height="1m" weight="204kg" types="water" />
        <Card name="Name3" height="5m" weight="160kg" types="fire" />
      </div>
    );
  }
}
