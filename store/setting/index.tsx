import produce from "../../utils/produce";
import {
  SET_DARK_MODE,
  settingProps
} from './types'
import { ActionRequest } from "./actions";

export const initalState: settingProps = {
  darkMode: false,
};


const ReducerSetting = (
  state:settingProps = initalState,
  action: ActionRequest
) => produce(state, (draft: settingProps) => {
  switch(action.type) {
  case SET_DARK_MODE: {
    draft.darkMode = action.payload.data;
    break;
  }
  default:
    break;
  }
});

export default ReducerSetting;