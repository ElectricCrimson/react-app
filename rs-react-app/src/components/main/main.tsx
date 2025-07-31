import React, { Component } from 'react';
import { Button } from '../button/button';
import { CardList } from '../cardList/cardList';
import './main.css';
import type { PokemonsArrProps } from '../../types/types';

export class Main extends Component<PokemonsArrProps> {
  state = {
    hasError: false,
  };

  throwError = () => {
    this.setState({ hasError: true });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      throw new Error('New error occurred');
    }

    return (
      <>
        <main className="main">
          <section className="cards">
            <CardList pokemons={this.props.pokemons} />
          </section>
          <Button onClick={() => this.throwError()}>Error Button</Button>
        </main>
      </>
    );
  }
}
