import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';

import setting from './setting';
import invoice from './invoice';
import { invoicesProps } from './invoice/types';
import { settingProps } from './setting/types';

const rootReducer = (
  state: CombinedState<{ setting: settingProps; invoice: invoicesProps; }> | undefined,
  action: any
) => {
  switch (action.type) {
  case HYDRATE:
    // console.log('HYDRATE', action);
    return action.payload;
  default: {
    const combineReducer = combineReducers({
      setting,
      invoice
    });
    return combineReducer(state, action);
  }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
