import React, { Component } from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import './App.css';
import { ErrorBoundary } from './components/error/errorBoundary';
import { Loader } from './components/loader/loader';

export class App extends Component {
  state = {
    pokemons: [],
    loading: false,
    inputValue: '',
  };

  componentDidMount(): void {
    this.setState({ loading: true });
    fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
      .then((response) => response.json())
      .then((response) =>
        this.setState({ pokemons: response.results, loading: false })
      );
  }

  render(): React.ReactNode {
    return (
      <>
        <ErrorBoundary>
          <div className="wrapper-app">
            <Header />
            {this.state.loading && <Loader />}
            <Main pokemons={this.state.pokemons} />
          </div>
        </ErrorBoundary>
      </>
    );
  }
}
