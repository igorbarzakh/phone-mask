import React, { useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Input } from './Input/Input';
import { MaskitoInput } from './Input/MaskitoInput';

const App = () => {
  const [customValue, setCustomValue] = useState('');
  const [maskitovalue, setMaskitovalue] = useState('');

  const handleChange = (e) => {
    setMaskitovalue(e.target.value);
  };

  const handleChangeCustom = (e) => {
    console.log(e.target.value);
    setCustomValue(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <div>
          <h2>Custom</h2>
          <Input value={customValue} onChange={handleChangeCustom} />
        </div>
        <div>
          <h2>Maskito</h2>
          <MaskitoInput value={maskitovalue} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default App;
