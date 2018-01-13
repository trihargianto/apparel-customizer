import {
  UPDATE_STATE_TEXT_OPTIONS,
  UPDATE_VALUE_TEXT,
  UPDATE_TEXT_OPTION_STATE
} from "../constants/actionTypes";

// initialState.mode value : "add", "edit"

const initialState = {
  mode: "add",
  valueText: "",
  valueColor: "",
  valueFontWeight: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATE_TEXT_OPTIONS:
      return {
        ...state,
        mode: action.mode
      };

    case UPDATE_VALUE_TEXT:
      return {
        ...state,
        valueText: action.text,
        valueColor: action.color,
        valueFontWeight: action.fontWeight
      };

    case UPDATE_TEXT_OPTION_STATE:
      return {
        ...state,
        [action.stateName]: action.stateValue
      };

    default:
      return state;
  }
};
