'use client';
import styles from './Input.module.scss';
import InputMask from 'react-input-mask';

export const Input = ({ type, onChange, value, label, mask }) => (
  <div className={styles.inputContainer}>
    <label>{label}</label>
    {mask ? (
      <InputMask alwaysShowMask={true} name="phoneField" mask="+7 (999) 999-99-99" value={value} onChange={onChange} type={type} />
    ) : (
      <input type={type} value={value} onChange={onChange} />
    )}
  </div>
);
