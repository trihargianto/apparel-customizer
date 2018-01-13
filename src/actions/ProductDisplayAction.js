import { UPDATE_CANVAS, UPDATE_OBJECTS_CANVAS } from "../constants/actionTypes";

export const updateCanvas = payload => ({
  type: UPDATE_CANVAS,
  payload
});

export const updateObjectsCanvas = payload => ({
  type: UPDATE_OBJECTS_CANVAS,
  payload
});
