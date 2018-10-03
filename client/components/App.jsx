import React, { Component } from 'react';
import { Provider } from 'react-redux';

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
          {/* <Mouse message="hello world" />
          <Amount>
            {({ amount }) => (
              <div>
                <Euro amount={amount} />
                <Pound amount={amount} />
              </div>
            )}
          </Amount> */}

          <ConstructorSuper parentProp />
        </div>
      </Provider>
    );
  }
}
