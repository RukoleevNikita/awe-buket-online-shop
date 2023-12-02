'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useSort } from '@/hooks';
import { Categories, Container, ProductCard } from '@/components';
import { useSearchParams } from 'next/navigation';
import { getCollection } from '@/services/index';
import styles from './ProductCollection.module.scss';
import { Subcategories } from '@/components/Subcategories/Subcategories';

export function ProductCollection({ data, category }) {
  // const { data, isLoading } = useSWR('collection', getCollection);
  // const searchParams = useSearchParams();
  // const params = searchParams.get('category');
  // const { sortedProduct, setSelectedSort } = useSort(data || []);

  // useEffect(() => {
  //   setSelectedSort(params);
  // }, []);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <nav>
            <Subcategories selectCategory={decodeURIComponent(category)} />
            {/*<Categories selectCategory={decodeURIComponent(category)} />*/}
          </nav>
        </div>
        <div className={styles.products}>
          {/*{!isLoading*/}
          {/*  ? sortedProduct.map(el => <ProductCard key={el._id} {...el} />)*/}
          {/*  :'Товары в катеогрии отсутствуют'*/}
          {/*}*/}
          {data
            ? data.map(el => <ProductCard key={el._id} {...el} />)
            :'Товары в катеогрии отсутствуют'
          }
        </div>
      </div>
    </Container>
  );
}



