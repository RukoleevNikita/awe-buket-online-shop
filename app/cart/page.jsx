'use client';

import styles from './Cart.module.scss';
import { Container, MainWrapper } from '@/components';
import useBasketStore from '@/store/useBasketStore';
import { shallow } from 'zustand/shallow';
import { CartFormDelivery, CartFormPickup, CartItem } from '@/components/Cart';
import { useEffect, useState } from 'react';
import { ProductSlider } from '@/components/ProductSlider/ProductSlider';
import { getPopularProducts } from '@/services';

export default function Cart() {
  const [cart, minusItem] = 
    useBasketStore(state => [state.cart, state.minusItem]);
  const [isChecked, setIsChecked] = useState(false);
  const [popularProducts, setPopularProducts] = useState(null);

  useEffect(() => {
    
    (async () => {
      const data = await getPopularProducts();
      setPopularProducts(data);
    })();
  });

  const toggleHandler = () => setIsChecked(!isChecked);
  return (
    <Container>
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

              <div>{isChecked ? <CartFormDelivery /> : <CartFormPickup />}</div>
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
              <ProductSlider
                products={popularProducts}
                title="Дополнительные товары"
                slidesPerView={3}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <p>В вашей корзине пока пусто</p>
        </div>
      )}
    </Container>
  );
}
