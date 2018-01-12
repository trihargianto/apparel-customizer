import { APP_UPDATE_OPENED_MENU } from "../constants/actionTypes";

export const updateOpenedMenu = item => ({
  type: APP_UPDATE_OPENED_MENU,
  item
});
