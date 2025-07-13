import React, { Component } from 'react';
import { Button } from '../button/button';
import './main.css';

export class Main extends Component {
  render(): React.ReactNode {
    return (
      <>
        <main className="main">
          <section className="cards"></section>
          <Button>Error Button</Button>
        </main>
      </>
    );
  }
}
