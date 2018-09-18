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
      return {
        ...state,
        byID: { ...state.byID, [action.payload.id]: action.payload },
        allIDs: state.allIDs.filter(x => x !== action.payload.id).concat(action.payload.id),
      };
    default:
      return state;
  }
};
