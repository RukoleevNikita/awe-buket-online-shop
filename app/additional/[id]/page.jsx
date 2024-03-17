'use client';

import { Categories, Container, ProductCollection } from '@/components';
import useSWR from 'swr';
import styles from './Collection.module.scss';
import { useEffect } from 'react';
import useBasketStore from '@/store/useBasketStore';
import { shallow } from 'zustand/shallow';

export default function Page({params}) {
  const [ productCollection, getProductCollection, loading ] = 
  useBasketStore(state => [
    state.productCollection,
    state.getProductCollection,
    state.loading
  ], shallow);
  const productID = params.id;

  useEffect(() => {
    getPop('collection', productID);
  }, [getProductCollection, productID]);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <nav>
            <Categories selectCategory={category} />
          </nav>
        </div>
        <div className={styles.products}>
          {loading || <ProductCollection data={productCollection.length ? 
            productCollection : []} category={category} />}
        </div>
      </div>
    </Container>
  );
};