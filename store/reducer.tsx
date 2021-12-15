import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';

import mode from './mode';
import invoice from './invoice';
import { invoicesProps } from './invoice/types';
import { modeProps } from './mode/types';

const rootReducer = (
  state: CombinedState<{ mode: modeProps; invoice: invoicesProps; }> | undefined,
  action: any
) => {
  switch (action.type) {
  case HYDRATE:
    // console.log('HYDRATE', action);
    return action.payload;
  default: {
    const combineReducer = combineReducers({
      mode,
      invoice
    });
    return combineReducer(state, action);
  }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
