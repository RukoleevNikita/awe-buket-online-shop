'use client';
import styles from './Product.module.scss';
import useBasketStore from '@/store/useBasketStore';
import { shallow } from 'zustand/shallow';
import { Slider } from '@/components/Slider/Slider';
import { Button, Container } from '@/components';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Product({ params }) {
  const [productCollection, getProduct, loading, product, 
    cart, addItem, removeItem] = useBasketStore(
    state => 
      [state.productCollection, state.getProduct, state.loading, 
        state.product, state.cart, state.addItem, state.removeItem]
  );
  const [productDetails, setProductDetails] = useState(false);
  const [inBasket, setInBasket] = useState(false);
  const path = usePathname();
  const { id } = params;

  useEffect(() => {
    console.log(cart);
    setInBasket(cart.items.some(el => el._id === id));
    const getProductDetails = async () => {
      try {
        if (!productCollection.length) {
          const req = await getProduct(decodeURIComponent(path), id);
          setProductDetails(req.filter(el => el._id === id)[0]);
        } else {
          setProductDetails(productCollection.filter(el => el._id === id)[0]);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    getProductDetails();
  }, [getProduct, productCollection, path, id, cart.totalCount, cart.items]);

  return (
    <>
      {productDetails ? (
        <Container>
          <div className={styles.product}>
            <div className={styles.product__slider}>
              <Slider {...productDetails.linksMainImages} />
            </div>
            <div className={styles.product__information}>
              <div 
                className={styles.product__information_title}
              >{productDetails.name}</div>
              <div className={styles.product__information_description}>
                <span>Состав: </span>
                {productDetails.description}
              </div>
              <div 
                className={styles.product__information_price}
              >{productDetails.price} ₽</div>
              {inBasket ? (
                <div className={styles.product__information_control}>
                  <Button onClick={() => removeItem(productDetails._id)} style={{ backgroundColor: '#32ce32' }}>
                    Удалить из корзины
                  </Button>
                </div>
              ) : (
                <div className={styles.product__information_control}>
                  <Button onClick={() => addItem(productDetails)} style={{ backgroundColor: '#cf3128' }}>
                    Добавить в корзину
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
}
