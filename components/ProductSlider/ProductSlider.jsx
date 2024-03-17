import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './ProductSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

export const ProductSlider = ({ title, products, slidesPerView }) =>
  products && (
    <div className={styles.ProductSlider}>
      <h3 className={styles.ProductSlider__title}>{title}</h3>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
      >
        {products?.map(product => {
          const { category, _id, linksMainImages, name, price } = product;

          return (
            <SwiperSlide key={_id}>
              <Link href={`/collection/${category}/${_id}`}>
                <Image
                  src={linksMainImages[0]}
                  alt={name}
                  width={640}
                  height={853}
                  className={styles.ProductSlider__image}
                />
                <h4>{name}</h4>
              </Link>
              <div className={styles.ProductSlider__row}>
                <b>{price} ₽</b>
                <Button>В корзину</Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
