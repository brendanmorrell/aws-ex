import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(e) {
    this.setState({ x: e.clientX, y: e.clientY });
  }
  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>x: {this.state.x}</p>
        <p>y: {this.state.y}</p>
      </div>
    );
  }
}
