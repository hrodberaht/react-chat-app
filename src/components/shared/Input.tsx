import React, { FC, ChangeEvent } from 'react';

interface InputInterface {
  label: string;
  className: string;
  onChange?(e: ChangeEvent<HTMLElement>): void;
  initialValue?: string;
}

export const Input: FC<InputInterface> = ({
  label,
  className,
  onChange: handleChange,
  initialValue
}) => (
  <div className={className}>
    <label>{label}</label>
    <input onChange={handleChange} value={initialValue} />
  </div>
);
