// @flow

// could be one action with displayType key (grid | table)
export const SHOW_GRID = 'SHOW_GRID';
export const SHOW_TABLE = 'SHOW_TABLE';

export type DisplayAction = { type: 'SHOW_GRID'} | { type: 'SHOW_TABLE' };

export function showGrid(): DisplayAction {
  return {
    type: 'SHOW_GRID',
  };
}

export function showTable(): DisplayAction {
  return {
    type: 'SHOW_TABLE',
  };
}
