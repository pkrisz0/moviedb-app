// @flow

import { SHOW_GRID, SHOW_TABLE } from '../actions/display';
import type { DisplayAction } from '../actions/display';

type State = {
  +view: string,
}

const initialState: State = {
  view: 'grid',
};

export default (state: State = initialState, action: DisplayAction): State => {
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
