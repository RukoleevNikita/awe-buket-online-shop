'use client';
import styles from './Occasion.module.scss';
import { Container, ProductCollection } from '@/components';
import { Subcategories } from '@/components/Subcategories/Subcategories';
import useBasketStore from '@/store/useBasketStore';
import { shallow } from 'zustand/shallow';
import { useEffect } from 'react';

export default function Occasion({params}) {
  const [ productCollection, 
    getProductCollection, loading ] = useBasketStore(state => [
    state.productCollection,
    state.getProductCollection,
    state.loading
  ]);
  const category = decodeURIComponent(params.category);

  useEffect(() => {
    getProductCollection('occasion', category);
  }, [getProductCollection, category]);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.ocation}>
          <nav>
            <Subcategories 
              selectCategory={decodeURIComponent(params.category)} 
            />
          </nav>
        </div>
        {loading || <ProductCollection data={productCollection.length ? 
          productCollection : []} />}
      </div>
    </Container>
  );
};

// add loading
// loader
/* 
    <div class="loader">
      <span class="loader__element"></span>
      <span class="loader__element"></span>
      <span class="loader__element"></span>
    </div>
  */

/* 
    :root {
      --main-color: #ecf0f1;
      --point-color: #555;
      --size: 5px;
    }

    .loader {
      background-color: var(--main-color);
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0; left: 0;
      display: flex;
      align-items: center;
      align-content: center; 
      justify-content: center;  
      z-index: 100000;
    }

    .loader__element {
      border-radius: 100%;
      border: var(--size) solid var(--point-color);
      margin: calc(var(--size)*2);
    }

    .loader__element:nth-child(1) {
      animation: preloader .6s ease-in-out alternate infinite;
    }
    .loader__element:nth-child(2) {
      animation: preloader .6s ease-in-out alternate .2s infinite;
    }

    .loader__element:nth-child(3) {
      animation: preloader .6s ease-in-out alternate .4s infinite;
    }

    @keyframes preloader {
      100% { transform: scale(2); }
    }
  */

// products.items.length && products.items.map((el) => (
//   <ProductCard key={el._id} {...el} />
// ))
