import React, { Component } from 'react';
import './errorBoundary.css';
import { Button } from '../button/button';
import type { ErrorBoundaryProps } from '../../types/types';

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="wrapper-error">
          <h2 className="heading-error">
            Oops!
            <br />
            Something went wrong... 🙁
          </h2>
          <Button onClick={() => this.setState({ hasError: false })}>
            Close
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
