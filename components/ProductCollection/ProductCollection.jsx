'use client';
import React, { useEffect, useState } from 'react';
import { useSort } from '@/hooks';
import { Categories, Container, ProductCard } from '@/components';
import styles from './CollectionProduct.module.scss';
import { useSearchParams } from 'next/navigation';
// import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from "react-redux";

export function productCollection({collection}){
  const [activeIndex, setActiveIndex] = useState();
  const [category, setCategory] = useState('Наборы клубники в шоколаде');
  const searchParams = useSearchParams();
  const params = searchParams.get('category');
  console.log(params);

  // const dispatch = useDispatch();
  // const { products } = useSelector(state => state.products);
  const { sortedProduct, setSelectedSort } = useSort(collection || []);
  // const location = useLocation();
  useEffect(() => {
    // dispatch(fetchProducts());
    // console.log('products ', products);
    if (location.state != null) {
      setCategory(location.state.category);
      setActiveIndex(location.state.id);
      setSelectedSort(location.state.category);
    }
  }, []);

  const eventHandler = (id, category) => {
    setCategory(category);
    setActiveIndex(id);
    setSelectedSort(category);
  };
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <nav>
            <Categories params={params} />
          </nav>
        </div>
        <div className={styles.products}>
          {/* проверить есть ли товары в БД */}
          {collection.length !== 0
            ? collection.map(el => <ProductCard key={el._id} {...el} />)
            : activeIndex
              ? 'Товары в катеогрии отсутствуют'
              : 'Необходимо выбрать категорию товара'}
        </div>
      </div>
    </Container>
  );
}


