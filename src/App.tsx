import React from 'react';

function App () {
  const a = true;
  const b = true;
  return (
    <div style={{ padding: '5px' }}>
      {a ?
        <h1>A is True</h1> : b ? <h1>B is True</h1> : <>A and B both are false</>}
    </div>
  );
}

export default App;
