// could be one action with displayType key (grid | table)
export const SHOW_GRID = 'SHOW_GRID';
export const SHOW_TABLE = 'SHOW_TABLE';

export function showGrid() {
  return {
    type: 'SHOW_GRID',
  };
}

export function showTable() {
  return {
    type: 'SHOW_TABLE',
  };
}
