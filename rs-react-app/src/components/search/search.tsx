import React, { Component } from 'react';
import { Button } from '../button/button';
import './search.css';

export class Search extends Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="wrapper-search">
          <label className="label">
            <input
              className="input"
              name="pokemon"
              id="pokemon"
              type="text"
              placeholder={`Enter Pokémon Name`}
            />
          </label>
          <Button onClick={() => {}}>Search</Button>
        </div>
      </>
    );
  }
}
