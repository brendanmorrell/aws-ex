import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTest } from '../actions/test.js';

const Redux = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.addTest({ id: 1234, testData: 'more data', testDate: 'a date', passed: true });
        }}
      >
        add Test
      </button>
      {JSON.stringify(props.tests)}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addTest: x => dispatch(addTest(x)),
});
const mapStateToProps = ({ tests }) => ({ tests });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux);
