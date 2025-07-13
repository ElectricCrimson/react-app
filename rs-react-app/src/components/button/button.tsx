import React, { Component } from 'react';
import type { ButtonProps } from '../../types/types';
import './button.css';

export class Button extends Component<ButtonProps> {
  render(): React.ReactNode {
    const { children, onClick } = this.props;

    return (
      <button type="button" className="btn" onClick={onClick}>
        {children}
      </button>
    );
  }
}
