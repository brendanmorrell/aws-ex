import * as types from '../constants/test.js';

const initialState = {
  byID: {
    123: {
      id: 123,
      testData: 'some data',
      testDate: 'some date',
      passed: false,
    },
  },
  allIDs: [123],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEST:
      const { payload: test } = action;
      const { id } = test;
      const byID = { ...state.byID, test };
      const allIDs = state.allIDs.filter(x => x !== id).concat(id);
      return { byID, allIDs };
    default:
      return state;
  }
};
