import React, { Component } from 'react';

export class Storage extends Component {
  state = {
    localStorageAvailable: false,
  };
  componentDidMount() {
    this.checkLocalStorageExists();
  }
  checkLocalStorageExists() {
    const testKey = 'test';
    try {
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      this.setState({ localStorageAvailable: true });
    } catch (e) {
      this.setState({ localStorageAvailable: false });
    }
  }
  load = key => (this.state.localStorageAvailable ? localStorage.getItem(key) : null);
  save = (key, data) => (this.state.localStorageAvailable ? localStorage.setItem(key, data) : null);
  remove = key => (this.state.localStorageAvailable ? localStorage.removeItem(key) : null);
  render() {
    return (
      <span>
        {this.props.render({
          load: this.load,
          save: this.save,
          remove: this.remove,
        })}
        <button onClick={() => this.save('key', 'data')}>save</button>
        <button onClick={() => this.remove('key')}>remove</button>
      </span>
    );
  }
}
