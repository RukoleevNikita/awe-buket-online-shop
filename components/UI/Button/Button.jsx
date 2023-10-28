// import React from 'react';
// import Button from 'react-bootstrap/Button';

export const Button = ({ children, onClick = () => {}, disabled = false, className = '', style }) => {
  return (
    <button type="button" variant="success" disabled={disabled} onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
};
