import React from 'react';

class ConstructorSuper extends React.Component {
  render() {
    return (
      <div>
        <h1>My h1:</h1>
        <h1>
          PROPS:
          {JSON.stringify(this.props)}
        </h1>
        <h1>
          STATE:
          {JSON.stringify(this.state)}
        </h1>
        <button />
      </div>
    );
  }
}

export default ConstructorSuper;
