import React, { Component } from 'react';
import { Button } from '../button/button';
import { CardList } from '../cardList/cardList';
import './main.css';

export class Main extends Component {
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
            <CardList />
          </section>
          <Button onClick={() => this.throwError()}>Error Button</Button>
        </main>
      </>
    );
  }
}
