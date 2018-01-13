import {
  UPDATE_STATE_TEXT_OPTIONS,
  UPDATE_VALUE_TEXT,
  UPDATE_TEXT_OPTION_STATE
} from "../constants/actionTypes";

export const updateStateTextOption = mode => ({
  type: UPDATE_STATE_TEXT_OPTIONS,
  mode
});

export const updateValueText = (text, color, fontWeight) => ({
  type: UPDATE_VALUE_TEXT,
  text,
  color,
  fontWeight
});

export const updateStateByName = (stateName, stateValue) => ({
  type: UPDATE_TEXT_OPTION_STATE,
  stateName,
  stateValue
});
