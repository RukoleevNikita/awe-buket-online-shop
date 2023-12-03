'use client';
// import React, { useSyncExternalStore } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useLocation } from 'react-router-dom';
//
//
// import { Container } from '../../components';
// import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
// import { Slider } from '../../components/Slider/Slider';
// import { Button } from '../../components/UI/Button/Button';
// import { addItem, removeItem } from '../../redux/slices/cartSlice';

import styles from './Product.module.scss';
import { useStore } from '@/store';
import { shallow } from 'zustand/shallow';
import { Slider } from '@/components/Slider/Slider';
import { Button, Container } from '@/components';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// import items from '2gis-maps/vendors/firmcard/test/sinon';

export default function Product ({ params }) {
  const [ productCollection, getProduct, loading, product ] = useStore(state => [
    state.productCollection,
    state.getProduct,
    state.loading,
    state.product
  ], shallow);
  const [productDetails, setProductDetails] = useState(false);
  const path = usePathname();
  const { id } = params;

  useEffect(  () => {
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
  }, [getProduct, productCollection, path, id]);

  function addProduct() {
    // const item = {
    //   id: data._id,
    //   name: data.name,
    //   price: Number(data.price),
    //   previewLinks: data.previewLinks,
    // };
    // dispatch(addItem(item));
  }

  function removeProduct() {
    // dispatch(removeItem(data._id));
  }
  return (
    <>
      {
        productDetails ?
          (
            <Container>
              <div className={styles.product}>
                <div className={styles.product__slider}>
                  <Slider {...productDetails.linksMainImages} />
                </div>
                <div className={styles.product__information}>
                  <div className={styles.product__information_title}>{productDetails.name}</div>
                  <div className={styles.product__information_description}>
                    <span>Состав: </span>
                    {productDetails.description}
                  </div>
                  <div className={styles.product__information_price}>{productDetails.price} ₽</div>
                  <div className={styles.product__information_control}>
                    {/* <Button onClick={addProduct} style={{'backgroundColor': items.some(item => item.id === id) ? '#32ce32' : '#cf3128' }}>{items.some(item => item.id === id) ? 'Удалить из корзины' : 'Добавить в корзину'}</Button> */}
                  </div>
                  {/*{items.some(item => item.id === id) ? (*/}
                  {/*  <div className={styles.product__information_control}>*/}
                  {/*    <Button onClick={removeProduct} style={{ backgroundColor: '#32ce32' }}>*/}
                  {/*      Удалить из корзины*/}
                  {/*    </Button>*/}
                  {/*  </div>*/}
                  {/*) : (*/}
                  {/*  <div className={styles.product__information_control}>*/}
                  {/*    <Button onClick={addProduct} style={{ backgroundColor: '#cf3128' }}>*/}
                  {/*      Добавить в корзину*/}
                  {/*    </Button>*/}
                  {/*  </div>*/}
                  {/*)}*/}
                </div>
              </div>
            </Container>
          ) : (<div>...Loading</div>)
      }</>
  );
}