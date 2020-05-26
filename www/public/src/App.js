import React from 'react';

import * as serviceWorker from './serviceWorker';

import Routes from './routes';

function App() {
  serviceWorker.unregister();
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
