import React from 'react';
import { useMaskito } from '@maskito/react';

import options from './mask';

export const MaskitoInput = ({ onChange, ...props }) => {
  const inputRef = useMaskito({ options });

  return (
    <input
      {...props}
      ref={inputRef}
      className="Input"
      type="tel"
      inputMode="tel"
      name="phone"
      placeholder="+7 (000) 000-00-00"
      onInput={onChange}
    />
  );
};
