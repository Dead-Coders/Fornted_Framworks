import React, { useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input element on button click
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default App;
