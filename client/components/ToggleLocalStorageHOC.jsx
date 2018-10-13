import React, { Component } from 'react';

const checkLSForVar = (Comp, ...variables) => {
  return class CheckLocal extends Component {
    state = {};
    componentDidMount() {
      const isValidJSON = input => {
        try {
          JSON.parse(input);
          return true;
        } catch (error) {
          return false;
        }
      };
      variables.forEach(variable => {
        const LS = localStorage.getItem(variable);
        const LSParsed = isValidJSON(LS)
          ? JSON.parse(localStorage.getItem(variable))
          : (localStorage.setItem([variable], 'false'), false);
        this.setState({ [variable]: LSParsed });
      });
    }
    toggleVariable = variable => {
      if (variable) {
        localStorage.setItem(variable, JSON.stringify(!this.state[variable]));
        this.setState(prevState => ({ [variable]: !prevState[variable] }));
      } else {
        localStorage.setItem(variables[0], (!this.state[variables[0]]).toString());
        this.setState(prevState => ({ [variables[0]]: !prevState[variables[0]] }));
      }
    };
    render() {
      return <Comp {...this.state} toggleVariable={this.toggleVariable} />;
    }
  };
};

class Sidebar extends Component {
  render() {
    const style = { width: '90px', height: '10px', backgroundColor: 'red' };
    return (
      <React.Fragment>
        <button onClick={() => this.props.toggleVariable('sidebar')}>
          {this.props.sidebar ? 'Hide' : 'Show'} Sidebar
        </button>
        {this.props.sidebar && <div style={style} />}
        <button onClick={() => this.props.toggleVariable('other')}>toggle other</button>
        {JSON.stringify(this.props)}
        {this.props.other && <div style={style} />}
      </React.Fragment>
    );
  }
}

const SidebarWithLS = checkLSForVar(Sidebar, 'sidebar', 'other');

export default SidebarWithLS;
