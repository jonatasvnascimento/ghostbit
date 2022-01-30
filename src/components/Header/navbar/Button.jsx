import React from 'react';
import './ButtonStyle.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const ckeckButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const ckeckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${ckeckButtonStyle} ${ckeckButtonSize}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
