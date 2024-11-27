import React, { useState } from 'react';
import { MaskitoInput } from './Input/MaskitoInput';

const App = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [maskitovalue, setMaskitovalue] = useState('');

  const handleChange = (e) => {
    setMaskitovalue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    setIsSubmit(true);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h2>Maskito form</h2>
        <MaskitoInput value={maskitovalue} onChange={handleChange} />

        <button type="submit">Sent</button>
      </form>
      <br />
      <br />
      {isSubmit && <div>{maskitovalue}</div>}
    </div>
  );
};

export default App;
