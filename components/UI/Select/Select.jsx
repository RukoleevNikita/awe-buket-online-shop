import { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icon/Icon';

import styles from './Select.module.scss';

export const Select = ({ label, options, onChange }) => {
  const [activeList, setActiveList] = useState(false);
  const [value, setValue] = useState('');
  const ref = useRef(null);

  const handleClickList = () => setActiveList(!activeList);

  useEffect(() => {
    function handler(e) {
      if (!ref.current?.contains(e.target)) {
        setActiveList(false);
      }
    }
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);
  const valueList = options.map((el, i) => {
    return (
      <li
        className={styles.select__item}
        key={i}
        name="value"
        onClick={() => {
          setValue(el);
          onChange(el);
          // dataСollector({ value: el, name: 'value' });
        }}
      >
        {el}
      </li>
    );
  });
  return (
    <div>
      <label>{label}</label>
      <div className={styles.select} onClick={handleClickList}>
        <input className={styles.select__input} type="hidden" />
        <div
          className={`${styles.select__head} ${
            activeList ? styles.select__head_arrow_down : styles.select__head_arrow_up
          }`}
          ref={ref}
        >
          <span>{value !== '' ? value : 'удобное время'}</span>
          <Icon id={'arrow'} />
        </div>
        <ul
          className={`${styles.select__list} ${activeList ? styles.select__list_open : styles.select__list_close}`}
          activeList
        >
          {valueList}
        </ul>
      </div>
    </div>
  );
};
