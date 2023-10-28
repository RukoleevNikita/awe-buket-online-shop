'use client';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useSort } from '@/hooks';
import { Categories, Container, ProductCard } from '@/components';
import { useSearchParams } from 'next/navigation';
import { getCollection } from '@/services/index';
import styles from './ProductCollection.module.scss';

export function ProductCollection() {
  const { data, isLoading } = useSWR('collection', getCollection);
  const searchParams = useSearchParams();
  const params = searchParams.get('category');
  const { sortedProduct, setSelectedSort } = useSort(data || []);
  const handleCategorySelect = selectedCategory => {
    setSelectedSort(selectedCategory);
  };
  useEffect(() => {
    setSelectedSort(params);
  }, []);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <nav>
            <Categories params={params} onCategorySelect={handleCategorySelect} />
          </nav>
        </div>
        <div className={styles.products}>
          {!isLoading
            ? sortedProduct.map(el => <ProductCard key={el._id} {...el} />)
            :'Товары в катеогрии отсутствуют'
          }
        </div>
      </div>
    </Container>
  );
}



