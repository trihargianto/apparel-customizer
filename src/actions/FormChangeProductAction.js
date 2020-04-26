import {
  UPDATE_SHIRT_COLOR,
  UPDATE_SHIRT_TYPE,
} from '../constants/actionTypes';

export const updateShirtColor = (color) => ({
  type: UPDATE_SHIRT_COLOR,
  color,
});

export const updateShirtType = (shirtType) => ({
  type: UPDATE_SHIRT_TYPE,
  shirtType,
});
