import {
  SET_DARK_MODE,
} from "./types";

export const setDarkmodeToggle = (mode: boolean) => ({
  type: SET_DARK_MODE,
  payload: { data: mode }
});

export type ActionRequest =
  | ReturnType<typeof setDarkmodeToggle>;
 