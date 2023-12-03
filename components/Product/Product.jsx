'use client';
// import React, { useSyncExternalStore } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

// import axios from '../../axios';

// import { Container } from '../../../components';
// import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
// import { Slider } from '../../../components/Slider/Slider';
// import { Button } from '../../../components/UI/Button/Button';
// import { addItem, removeItem } from '../../../redux/slices/cartSlice';

import styles from './Product.module.scss';
import useSWR from 'swr';
import { getProduct } from '@/services';
import { Container } from '@/components';
import { Slider } from '@/components/Slider/Slider';
export function Product() {
// export const Page = ({product}) => {
//   const { data, isLoading } = useSWR(`/api/products/${id}`, getProduct);
//   console.log('data ', data);
  // const dispatch = useDispatch();
  // // const addedCount = useSelector(state => state.cart.items.find(obj => obj.id === id));
  // const [data, setData] = React.useState();
  // const [isLoading, setLoading] = React.useState(true);
  //
  // const { id } = useParams();
  // const { items, totalPrice, totalCount } = useSelector(state => state.cart);

  // const nav = useNavigate();

  // console.log(useLocation());

  // React.useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(`/getproduct/${id}`)
  //       .then(res => {
  //         setData(res.data);
  //         setLoading(false);
  //         window.scrollTo(0, 0);
  //       })
  //       .catch(err => {
  //         console.warn(err);
  //         alert('Ошибка при получении товара');
  //       });
  //   }
  // }, []);

  // function addProduct() {
  //   const item = {
  //     id: data._id,
  //     name: data.name,
  //     price: Number(data.price),
  //     previewLinks: data.previewLinks,
  //   };
  //   dispatch(addItem(item));
  // }
  //
  // function removeProduct() {
  //   dispatch(removeItem(data._id));
  // }

  return (
    <p>asdas</p>
  );
};



