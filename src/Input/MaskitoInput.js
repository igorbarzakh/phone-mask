import React from 'react';

import { maskitoTransform } from '@maskito/core';
import { fromEvent } from 'rxjs';

import options from './mask';
import './Input.modules.scss';

export const MaskitoInput = ({ onChange, ...props }) => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      fromEvent(inputRef.current, 'blur').subscribe((event) => {
        handleChange(event);
      });
    }
  }, []);

  const handleChange = (event) => {
    const updatedEvent = { target: { value: event.target.value } };
    updatedEvent.target.value = maskitoTransform(event.target.value, options);
    inputRef.current.value = updatedEvent.target.value;

    onChange(updatedEvent);
  };

  return (
    <input
      {...props}
      ref={inputRef}
      className="Input"
      name="phone"
      type="tel"
      inputMode="tel"
      placeholder="+7 (000) 000-00-01"
      onInput={handleChange}
    />
  );
};
