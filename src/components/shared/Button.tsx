import React, { FC, MouseEvent } from 'react';

interface ButtonInterface {
  className?: string;
  onClick(e: MouseEvent<HTMLElement>): void;
  name: string;
}

const Button: FC<ButtonInterface> = ({
  onClick: handleClick,
  className,
  name,
}) => (
  <button className={className} onClick={handleClick}>
    {name}
  </button>
);

export default Button;
