import React from 'react';

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default class extends React.Component {
  state = { amount: 0 };
  onIncrement = () => {
    this.setState(({ amount }) => ({ amount: amount + 1 }));
  };
  onDecrement = () => {
    this.setState(({ amount }) => ({ amount: amount - 1 }));
  };
  render() {
    return (
      <>
        <span>US Dollar: {this.state.amount}</span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state)}
      </>
    );
  }
}
