// import React from 'react';
// import Button from 'react-bootstrap/Button';
import styles from './Button.module.scss';

export const Button = ({ children, onClick = () => {}, disabled = false, className = '', style = {} }) => {
  const cls = [styles.Button, className];

  return (
    <button type="button" variant="success" disabled={disabled} onClick={onClick} className={cls.join(' ').trim()} style={style}>
      {children}
    </button>
  );
};
