'use client';
import { ProductCard } from '@/components';
import styles from './ProductCollection.module.scss';

export function ProductCollection({ data }) {
  return (
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


  );
}



