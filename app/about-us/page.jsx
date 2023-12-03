import React from 'react';

import { Image1, Image2, Image3, Image4, Image5, Image6, Image8, Image9, Image10, Image11 } from '@/public/images/aboutUs/index';
import { Container } from '@/components';
import Image from 'next/image';
import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <Container>
      <h1 className={styles.title}>О нас</h1>
      <div className={styles.content}>
        <p>Мы создаём - вы удивляете!</p>
        <p>
          Мастерская подарков Awebuket приносит радость уже 6 год Мы находимся по адресу: Ватутина, 16, вывеска «Мастерская подарков», режим работы с
          10 до 20:00 ежедневно, без обеда и выходных
        </p>
        <p>У нас:</p>
        <ul>
          <li>
            Клубника в шоколаде:
            <ul>
              <li>в коробочке</li>
              <li>в букете </li>
              <li>в корзине</li>
            </ul>
          </li>
          <li>Бананы и другие фрукты/ягоды в шоколаде </li>
          <li>Финики с начинкой в шоколаде </li>
          <li>Плиточный шоколад ручной работы</li>
          <li>
            Композиции из:
            <ul>
              <li>фруктов </li>
              <li>ягод </li>
              <li>шоколадных цветов </li>
              <li>живых цветов </li>
              <li>орехов </li>
              <li>сухофруктов </li>
              <li>овощей</li>
              <li>раков </li>
              <li>морепродуктов </li>
              <li>мясных деликатесов </li>
              <li>сыра</li>
            </ul>
          </li>
          <li>Гелиевые шары</li>
          <li>
            Праздничная атрибутика:
            <ul>
              <li>открытки </li>
              <li>подарочные коробки </li>
              <li>топперы </li>
              <li>свечи для торта </li>
              <li>хлопушки </li>
              <li>цветной дым</li>
            </ul>
          </li>
          <li>Упаковка ваших подарков У нас качество! В нас можно не сомневаться, мы не подведём и сделаем все на высшем уровне!</li>
        </ul>
      </div>
      <div className={styles.gallery}>
        <Image src={Image1} alt="" className={styles.gallery__img} />
        <Image src={Image2} alt="" className={styles.gallery__img} />
        <Image src={Image3} alt="" className={styles.gallery__img} />
        <Image src={Image4} alt="" className={styles.gallery__img} />
        <Image src={Image5} alt="" className={styles.gallery__img} />
        <Image src={Image6} alt="" className={styles.gallery__img} />
        <Image src={Image8} alt="" className={styles.gallery__img} />
        <Image src={Image9} alt="" className={styles.gallery__img} />
        <Image src={Image10} alt="" className={styles.gallery__img} />
        <Image src={Image11} alt="" className={styles.gallery__img} />
      </div>
    </Container>
  );
}
