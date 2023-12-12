'use client';
import { ProductCard } from '@/components';
import styles from './ProductCollection.module.scss';

export function ProductCollection({ data, category }) {
  // console.log(data);
  return (
    <div className={styles.products}>
      {/*{!isLoading*/}
      {/*  ? sortedProduct.map(el => <ProductCard key={el._id} {...el} />)*/}
      {/*  :'Товары в катеогрии отсутствуют'*/}
      {/*}*/}
      {data.length
        ? data.map(el => 
          <ProductCard key={el._id} {...el} category={category} />)
        :'Товары в катеогрии отсутствуют'
      }
    </div>


  );
}



