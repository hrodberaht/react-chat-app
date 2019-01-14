import React, { FC } from 'react';

interface InputInterface {
  label: string;
  className: string;
}

export const Input: FC<InputInterface> = ({ label, className }) => (
  <div className={className}>
    <label>{label}</label>
    <input />
  </div>
);
