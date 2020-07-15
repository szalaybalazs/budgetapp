import React from 'react';
import Navigator from './screens';
import Providers from './providers';
const App = () => {
  return (
    <Providers>
      <Navigator />
    </Providers>
  );
}

export default App;