import styles from './Input.module.scss';

export const Input = ({ type, onChange, value, label }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};
