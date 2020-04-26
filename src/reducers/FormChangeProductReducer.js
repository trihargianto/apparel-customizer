import {
  UPDATE_SHIRT_COLOR,
  UPDATE_SHIRT_TYPE,
} from '../constants/actionTypes';

const initialState = {
  shirtColor: '#9c27b0',
  shirtType: 'basic_tshirt',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIRT_COLOR:
      return {
        ...state,
        shirtColor: action.color,
      };
    case UPDATE_SHIRT_TYPE:
      return {
        ...state,
        shirtType: action.shirtType,
      };

    default:
      return state;
  }
};
