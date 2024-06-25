import React, { useEffect } from 'react';
import { initGnus, processGnus } from './geniusSDKWrapper';

const App = () => {
  useEffect(() => {
    initGnus();
  }, []);

  const handleProcessGnus = () => {
    processGnus("QmUDMvGQXbUKMsjmTzjf4ZuMx7tHx6Z4x8YH8RbwrgyGAf", 1);
  };

  return (
    <div>
      <h1>Hello from React</h1>
      <button onClick={handleProcessGnus}>Process Gnus</button>
    </div>
  );
};

export default App;
