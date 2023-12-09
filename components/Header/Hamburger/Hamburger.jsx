'use client';
import { useState } from 'react';

import classes from './Hamburger.module.scss';

const Hamburger = ({ isClickHamburger, onToggle }) => {
  const [isActive, setIsActive] = useState(false);
  const hamburgerCls = [classes.hamburger, classes.hamburger__elastic];
  const onClickHamburger = () => {
    onToggle();
    setIsActive(!isActive);
  };
  if (isClickHamburger) hamburgerCls.push(classes.is_active);

  return (
    <button className={hamburgerCls.join(' ')} type="button" onClick={() => onClickHamburger()}>
      <span className={classes.hamburger_box}>
        <span className={classes.hamburger_inner}></span>
      </span>
    </button>
  );
};

export default Hamburger;
