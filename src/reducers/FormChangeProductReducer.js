import { UPDATE_SHIRT_COLOR } from "../constants/actionTypes";

const initialState = {
  shirtColor: "#ffffff"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIRT_COLOR:
      return {
        ...state,
        shirtColor: action.color
      };

    default:
      return state;
  }
};
