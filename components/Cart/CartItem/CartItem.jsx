'use client';
// import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
//
// import { Button } from '../../UI/Button/Button';
// import { addItem } from '../../redux/slices/cartSlice';

import Link from 'next/link';
import Image from 'next/image';

import styles from './CartItem.module.scss';
import { Button } from '@/components';
import { useStore } from '@/store';
import { shallow } from 'zustand/shallow';

import TrashIcon from '../../../public/icons/trash.svg';

export const CartItem = item => {
  const [cart, addItem, removeItem, minusItem] = 
    useStore(state => 
      [state.cart, state.addItem, state.removeItem, state.minusItem], shallow);

  const onClickRemove = () => {
    // if (window.confirm('Ты действительно хочешь удалить товар?')) {
    //   dispatch(removeItem(item.id));
    // }
  };
  return (
    <div className={styles.cartItem}>
      <img src={item.previewLinks[0]} alt="" />
      <Link href={`/collection/${item.category}/${item._id}`} className={styles.cartItem__name}>
        {item.name}
      </Link>
      {/* <div className={styles.cartItem__name}>{item.name}</div> */}
      <div className={styles.cartItem__countProduct}>
        <Button onClick={() => minusItem(item._id)}></Button>
        <span>{item.count}</span>
        <Button onClick={() => addItem(item)}></Button>
      </div>
      <div className={styles.cartItem__price}>{item.price} ₽</div>
      <div className={styles.cartItem__del} 
        onClick={() => removeItem(item._id)}>
        <Image alt="" src={TrashIcon} />
      </div>
    </div>
  );
};
