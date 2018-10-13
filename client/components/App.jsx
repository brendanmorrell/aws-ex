import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore.js';

import Redux from './Redux.jsx';
import { ComponentNeedingStorage } from './ComponentNeedingStorage.jsx';
import WithColoredBorder from './Parent.jsx';
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

import Mouse from './Mouse.jsx';
import Amount from './Amount.jsx';
import store from '../store/configureStore.js';
// import FetchBetStatsContainer from './FetchBetStatsContainer.jsx';
/* <FetchBetStatsContainer /> */
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const a = {};
const b = { c: { d: {} } };
// a?.b?.c
Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;
import ConstructorSuper from './ConstructorSuper.jsx';
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ComponentNeedingStorage />
          <Redux />
          {0 || <p>heyo</p>}
          {0 && <p>heyo</p>}
          <p>asasas</p>
          <WithColoredBorder
            render={color => {
              <div style={{ border: `1px solid ${color}` }} />;
            }}
            children={<h1>this should display</h1>}
          >
            this overwrites the h1 children
          </WithColoredBorder>
        </div>
      </Provider>
    );
  }
}
