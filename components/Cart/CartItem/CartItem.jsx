// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem, minusItem, removeItem } from '../../../redux/slices/cartSlice';
import { Button } from '../../UI/Button/Button';
// import { addItem } from '../../redux/slices/cartSlice';

import styles from './CartItem.module.scss';

export const CartItem = (item) => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const onClickPlus = () => {
    dispatch(
      addItem({
        id: item.id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(
      minusItem({
        id: item.id,
      })
    );
  };
  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(item.id));
    }
  };
  // id: data._id,
  // name: data.name,
  // price: Number(data.price),
  // previewUrl: data.previewUrl

  return (
    <div className={styles.cartItem}>
      <img src={item.previewLinks[0]} alt="" />
      <Link to={`/product/${item.id}`} className={styles.cartItem__name}>
        {item.name}
      </Link>
      {/* <div className={styles.cartItem__name}>{item.name}</div> */}
      <div className={styles.cartItem__countProduct}>
        <Button onClick={onClickMinus}>
          -
          {/* <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
            <path d="M10.9958 0.991366H1.00326" stroke="#56392F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg> */}
        </Button>
        <span>{item.count}</span>
        <Button onClick={onClickPlus}>
          +
          {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10.9958 5.99137H1.00326" stroke="#56392F" strokeWidth="1.5" strokeWinecap="round" strokeLinejoin="round"></path>
            <path d="M5.99847 10.9922L5.99951 0.990356" stroke="#56392F" strokeWidth="1.5" strokeWinecap="round" strokeLinejoin="round"></path>
          </svg> */}
        </Button>
      </div>
      <div className={styles.cartItem__price}>{item.price} ₽</div>
      <div className={styles.cartItem__del} onClick={onClickRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g id="Iconly/Light/Delete">
            <g id="Delete">
              <path
                id="Stroke 1"
                d="M19.3248 9.4682C19.3248 9.4682 18.7818 16.2032 18.4668 19.0402C18.3168 20.3952 17.4798 21.1892 16.1088 21.2142C13.4998 21.2612 10.8878 21.2642 8.27979 21.2092C6.96079 21.1822 6.13779 20.3782 5.99079 19.0472C5.67379 16.1852 5.13379 9.4682 5.13379 9.4682"
                stroke="#BDAFA3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                id="Stroke 3"
                d="M20.708 6.23972H3.75"
                stroke="#BDAFA3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                id="Stroke 5"
                d="M17.4406 6.2397C16.6556 6.2397 15.9796 5.6847 15.8256 4.9157L15.5826 3.6997C15.4326 3.1387 14.9246 2.7507 14.3456 2.7507H10.1126C9.53358 2.7507 9.02558 3.1387 8.87558 3.6997L8.63258 4.9157C8.47858 5.6847 7.80258 6.2397 7.01758 6.2397"
                stroke="#BDAFA3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
