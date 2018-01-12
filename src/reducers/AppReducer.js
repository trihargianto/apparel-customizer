import { APP_UPDATE_OPENED_MENU } from "../constants/actionTypes";

const initialState = {
  openedMenu: "change"
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_UPDATE_OPENED_MENU:
      return {
        ...state,
        openedMenu: action.item
      };

    default:
      return state;
  }
};

export default AppReducer;
