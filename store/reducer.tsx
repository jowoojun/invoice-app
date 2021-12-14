import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';

import setting from './setting';
import { settingProps } from './setting/types';

const rootReducer = (
  state: CombinedState<{ setting: settingProps; }> | undefined,
  action: any
) => {
  switch (action.type) {
  case HYDRATE:
    // console.log('HYDRATE', action);
    return action.payload;
  default: {
    const combineReducer = combineReducers({
      setting,
    });
    return combineReducer(state, action);
  }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
