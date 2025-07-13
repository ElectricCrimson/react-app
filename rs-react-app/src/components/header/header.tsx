import React, { Component } from 'react';
import { Search } from '../search/search';
import './header.css';

export class Header extends Component {
  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <Search />
        </header>
      </>
    );
  }
}
