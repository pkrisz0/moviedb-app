// @flow

import * as React from 'react';

export default ({ count }: { count: number }) => (
  <div style={{ width: '100px', display: 'inline-block', margin: '10px' }}>
    <p>
      <strong>{count}</strong>
        MOVIES
    </p>
  </div>
);
