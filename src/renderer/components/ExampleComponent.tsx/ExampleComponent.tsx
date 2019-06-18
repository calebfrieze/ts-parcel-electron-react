import * as React from 'react';

export const ExampleComponent: React.FC = () => (
  <div>This is an example component that has access to Node APIs! OS: {process.platform}</div>
);