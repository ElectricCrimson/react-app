import React, { Component } from 'react';
import './Loader.css';

export class Loader extends Component {
  render(): React.ReactNode {
    return (
      <div className="loading">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    );
  }
}
