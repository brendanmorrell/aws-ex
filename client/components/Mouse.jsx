import React, { Component } from 'react';

class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    return <div onMouseMove={this.handleMouseMove}>{this.props.children(this.state)}</div>;
  }
}
class App extends Component {
  render() {
    return (
      <Mouse>
        {mouse => (
          <div style={{ height: '100%' }}>
            <h1>
              the mouse position is ({mouse.x}, {mouse.y}
              ), the message is {this.props.message}
            </h1>
          </div>
        )}
      </Mouse>
    );
  }
}
export default App;
