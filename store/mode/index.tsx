import produce from "../../utils/produce";
import {
  SET_DARK_MODE,
  modeProps
} from './types'
import { ActionRequest } from "./actions";

export const initalState: modeProps = {
  darkMode: false,
};


const ReducerMode = (
  state:modeProps = initalState,
  action: ActionRequest
) => produce(state, (draft: modeProps) => {
  switch(action.type) {
  case SET_DARK_MODE: {
    draft.darkMode = action.payload.data;
    break;
  }
  default:
    break;
  }
});

export default ReducerMode;