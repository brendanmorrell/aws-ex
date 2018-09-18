import React, { Component } from 'react';
import { ComponentNeedingStorage } from './ComponentNeedingStorage.jsx';
import { Provider } from 'react-redux';
import Redux from './Redux.jsx';
import store from '../store/configureStore.js';
// export class App extends Component {
//   state = { x: 0, y: 0 };
//   handleMouseMove = e => {
//     this.setState({ x: e.clientX, y: e.clientY });
//   };
//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//         <h1>Move the mouse around!!!!</h1>
//         <p>x: {this.state.x}</p>
//         <p>y: {this.state.y}</p>
//       </div>
//     );
//   }
// }

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ComponentNeedingStorage />
          <Redux />
        </div>
      </Provider>
    );
  }
}
