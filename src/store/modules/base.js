import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

const CHANGE_INPUT = 'base/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT);

const initialState = Map({

});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },

}, initialState);
