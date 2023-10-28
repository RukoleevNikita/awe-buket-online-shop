import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import axios from '../../axios';

import { Subcategories } from '../../components/Subcategories/Subcategories';
import { Container, ProductsCards } from '../../components/index';

import { useSort } from '../../hooks/useSort';
import { fetchProducts, fetchProductsCat } from '../../redux/slices/productsSlice';

import styles from './Occasion.module.scss';

export const Occasion = () => {
  const SUBCATEGORIES = [
    'Маме',
    'Любимой',
    'Мужчине',
    'Коллеге',
    'День рождения',
    'Свадьба',
    'Рождение ребенка',
    'Выпускной',
    'Последний звонок',
    'Годовщина',
    '1 сентября, учителю',
    'День матери',
    'Новый год',
    '14 февраля',
    '23 февраля',
    '8 марта',
    'День семьи',
  ];
  const [activeIndex, setActiveIndex] = useState();
  const [occasion, setOccasion] = useState('1 сентября, учителю');
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { sortedProduct, setSelectedSort } = useSort(products.items || []);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProducts());
    if (location.state != null) {
      setOccasion(location.state.occasion);
      setActiveIndex(location.state.id);
      setSelectedSort(location.state.occasion);
    }
  }, [dispatch]);

  const eventHandler = (id, occasion) => {
    setOccasion(occasion);
    setActiveIndex(id);
    setSelectedSort(occasion);
  };
  return (
    <main>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.subcategories}>
            <nav>
              <>
                <div className={styles.subcategories__navigation}>
                  <h4>Кому: </h4>
                  {SUBCATEGORIES.slice(0, 4).map((el, id) => (
                    <div
                      key={id}
                      onClick={() => eventHandler(id, el, 'subcategories')}
                      className={location.pathname === '/occasion' && occasion === el ? styles.active : ''}
                    >
                      {el}
                    </div>
                  ))}
                </div>
                <div className={styles.subcategories__navigation}>
                  <h4>Событие: </h4>
                  {SUBCATEGORIES.slice(4, 10).map((el, id) => (
                    <div
                      key={id}
                      onClick={() => eventHandler(id, el, 'subcategories')}
                      className={location.pathname === '/occasion' && occasion === el ? styles.active : ''}
                    >
                      {el}
                    </div>
                  ))}
                </div>
                <div className={styles.subcategories__navigation}>
                  <h4>Праздник: </h4>
                  {SUBCATEGORIES.slice(10, 17).map((el, id) => (
                    <div
                      key={id}
                      onClick={() => eventHandler(id, el, 'subcategories')}
                      className={location.pathname === '/occasion' && occasion === el ? styles.active : ''}
                    >
                      {el}
                    </div>
                  ))}
                </div>
              </>
            </nav>
          </div>
          <div className={styles.products}>
            {/* проверить есть ли товары в БД */}
            {sortedProduct.length !== 0
              ? sortedProduct.map(el => <ProductsCards key={el._id} {...el} />)
              : activeIndex
                ? 'Товары в катеогрии отсутствуют'
                : 'Необходимо выбрать категорию товара'}
          </div>
        </div>
      </Container>
    </main>
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
