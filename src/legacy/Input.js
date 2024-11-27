import React, { useState } from 'react';

import './Input.modules.scss';

const getNumbersValue = (value) => {
  return value.trim().replace(/\D/g, '');
};

export const Input = ({ value: stateValue, onChange, ...props }) => {
  const [value, setValue] = useState(stateValue);

  const handleChange = (e) => {
    const input = e.target;
    let numbersValue = getNumbersValue(input.value);
    let formatedInputValue = '';

    if (!numbersValue) {
      setValue('');
      return;
    }

    if (['7', '8'].indexOf(numbersValue[0]) < 0) {
      numbersValue = '7' + numbersValue;
    }

    let firstSymbol = '+7';
    formatedInputValue = firstSymbol + ' ';

    if (numbersValue.length > 1) {
      formatedInputValue = formatedInputValue + '(' + numbersValue.substring(1, 4);
    }

    if (numbersValue.length >= 5) {
      formatedInputValue = formatedInputValue + ') ' + numbersValue.substring(4, 7);
    }

    if (numbersValue.length >= 8) {
      formatedInputValue = formatedInputValue + '-' + numbersValue.substring(7, 9);
    }

    if (numbersValue.length >= 10) {
      formatedInputValue = formatedInputValue + '-' + numbersValue.substring(9, 11);
    }

    setValue(formatedInputValue);
    input.value = formatedInputValue;
    onChange(e);
  };

  const keydownHandler = (e) => {
    if (e.keyCode === 8 && getNumbersValue(e.target.value).length === 1) {
      setValue('');
    }
  };

  return (
    <input
      {...props}
      value={value}
      className="Input"
      type="tel"
      inputMode="tel"
      name="phone"
      onChange={handleChange}
      placeholder="+7 (000) 000-00-00"
      onKeyDown={keydownHandler}
      autoComplete="off"
    />
  );
};
