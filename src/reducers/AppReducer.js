import { APP_UPDATE_OPENED_MENU } from '../constants/actionTypes';

/*
 * initialState.openedMenu default value : change, text, image
 */

const initialState = {
  openedMenu: 'text',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_UPDATE_OPENED_MENU:
      return {
        ...state,
        openedMenu: action.item,
      };

    default:
      return state;
  }
};

export default AppReducer;
