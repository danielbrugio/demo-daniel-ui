import { CHANGE_THEME } from "../actions/changeThemeAction";
import { sea } from "react-daniel-ui";

export const changeThemeReducer = (state = sea, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};
