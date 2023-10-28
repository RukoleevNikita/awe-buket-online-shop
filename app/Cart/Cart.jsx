import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, MainWrapper, CartItem, CartFormPickup, Button, CartFormDelivery } from '../../components';

import styles from './Cart.module.scss';

export const Cart = () => {
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  // id: data._id,
  // name: data.name,
  // price: Number(data.price),
  // previewUrl: data.previewUrl
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => setIsChecked(!isChecked);

  return (
    <Container>
      <MainWrapper>
        {items.length ? (
          <>
            <div className={styles.wrapper}>
              <div className={styles.orderForm}>
                <h1>Оформление заказа</h1>
                <div className={styles.toggleBlock}>
                  <div className={`${styles.customToggle} ${isChecked ? styles.active : ''}`} onClick={toggleHandler}>
                    <div className={styles.toggleSlider}></div>
                  </div>
                  {/* {isChecked ? <p>Доставка</p> : <p>Самовывоз</p>} */}
                  {<p>доставка/самовывоз</p>}
                </div>
                <div>{isChecked ? <CartFormDelivery /> : <CartFormPickup />}</div>
                {/* {isChecked ? <CartFormDelivery /> : <CartFormPickup />} */}
              </div>
              <div className={styles.order}>
                <div>
                  <h1>Ваш заказ</h1>
                  {items.map((item) => (
                    <CartItem {...item} key={item.id} />
                  ))}
                </div>
                <div className={styles.order__price}>
                  <div>
                    Итого: <span>{totalPrice} ₽</span>
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
};
