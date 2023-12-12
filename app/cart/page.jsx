'use client';

import styles from './Cart.module.scss';
import { Container, MainWrapper } from '@/components';
import { useStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { CartFormDelivery, CartFormPickup, CartItem } from '@/components/Cart';
import { useState } from 'react';

export default function Cart() {
  const [cart, minusItem] = useStore(state => 
    [state.cart, state.minusItem], shallow);
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => setIsChecked(!isChecked);
  return (
    <Container>
      <MainWrapper>
        {cart.items.length ? (
          <>
            <div className={styles.wrapper}>
              <div className={styles.orderForm}>
                <h1>Оформление заказа</h1>
                <div className={styles.toggleBlock}>
                  <div className={`${styles.customToggle} ${isChecked ? styles.active : ''}`} onClick={toggleHandler}>
                    <div className={styles.toggleSlider}></div>
                  </div>
                  {<p>доставка/самовывоз</p>}
                  {/*{isChecked ? <p>Доставка</p> : <p>Самовывоз</p>}*/}
                </div>

                <div>
                  {isChecked ? <CartFormDelivery /> : <CartFormPickup />}
                </div>
                {/*{isChecked ? <CartFormDelivery /> : <CartFormPickup />}*/}
              </div>
              <div className={styles.order}>
                <div>
                  <h1>Ваш заказ</h1>
                  {cart.items.map(item => (
                    <CartItem {...item} key={item.id} />
                  ))}
                </div>
                <div className={styles.order__price}>
                  <div>
                    Итого: <span>{cart.totalPrice} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>В вашей корзине пока пусто</p>
        )}
      </MainWrapper>
    </Container>
  );
}
