import React, { useSyncExternalStore } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import axios from '../../axios';

import { Container } from '../../components';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Slider } from '../../components/Slider/Slider';
import { Button } from '../../components/UI/Button/Button';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

import styles from './Product.module.scss';

export const Product = () => {
  const dispatch = useDispatch();
  // const addedCount = useSelector(state => state.cart.items.find(obj => obj.id === id));
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  const { id } = useParams();
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);

  // const nav = useNavigate();

  // console.log(useLocation());

  React.useEffect(() => {
    if (id) {
      axios
        .get(`/getproduct/${id}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.warn(err);
          alert('Ошибка при получении товара');
        });
    }
  }, []);

  function addProduct() {
    const item = {
      id: data._id,
      name: data.name,
      price: Number(data.price),
      previewLinks: data.previewLinks,
    };
    dispatch(addItem(item));
  }

  function removeProduct() {
    dispatch(removeItem(data._id));
  }

  return (
    <>
      {
        isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Container>
            <div className={styles.product}>
              <div className={styles.product__slider}>
                <Slider {...data.linksMainImages} />
                {/* {
                  data.linksMainImages.map((el, i) => (
                    <Slider src={el} key={i} dataIndex={i}/>
                  ))
                } */}
              </div>
              <div className={styles.product__information}>
                <div className={styles.product__information_title}>{data.name}</div>
                <div className={styles.product__information_description}>
                  <span>Состав: </span>
                  {data.description}
                </div>
                <div className={styles.product__information_price}>{data.price} ₽</div>
                <div className={styles.product__information_control}>
                  {/* <Button onClick={addProduct} style={{'backgroundColor': items.some(item => item.id === id) ? '#32ce32' : '#cf3128' }}>{items.some(item => item.id === id) ? 'Удалить из корзины' : 'Добавить в корзину'}</Button> */}
                </div>
                {items.some((item) => item.id === id) ? (
                  <div className={styles.product__information_control}>
                    <Button onClick={removeProduct} style={{ backgroundColor: '#32ce32' }}>
                      Удалить из корзины
                    </Button>
                  </div>
                ) : (
                  <div className={styles.product__information_control}>
                    <Button onClick={addProduct} style={{ backgroundColor: '#cf3128' }}>
                      Добавить в корзину
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        )
        // <img src={`${data.linksMainImages[0]}`} alt="" />
      }
    </>
  );
};
