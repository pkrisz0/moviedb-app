import { SHOW_GRID, SHOW_TABLE } from '../actions/display';

const initialState = {
  view: 'grid',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GRID:
      return {
        ...state,
        view: 'grid',
      };
    case SHOW_TABLE:
      return {
        ...state,
        view: 'table',
      };
    default:
      return state;
  }
};
