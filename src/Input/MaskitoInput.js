import React from 'react';
import { useMaskito } from '@maskito/react';

import options from './mask';
import './Input.modules.scss';

export const MaskitoInput = ({ onChange, ...props }) => {
  const maskedInputRef = useMaskito({ options });

  return (
    <input
      {...props}
      ref={maskedInputRef}
      className="Input"
      name="phone"
      type="tel"
      inputMode="tel"
      placeholder="+7 (000) 000-00-00"
      onInput={onChange}
    />
  );
};
