// import React from 'react';
// import '../../assets/fonts/fonts.css';
// import { motion, AnimatePresence } from 'framer-motion';

// import offer_1 from '../../assets/images/offer_1.jpg';
// import offer_2 from '../../assets/images/offer_2.jpg';

import styles from './page.module.scss';
import { Banner, Container, Icon } from '@/components';

export default function Home () {
  return (
    <>
      <Banner />
      <main className={styles.main}>
        <Icon id="mainLineUp" />
        <Container>
          <div className={styles.main_title}>
            <span> ✦ омск ✦ </span>
            <span>Мы создаем настроение и оригинаотные 
              подарки для Ваших близких</span>
          </div>
          <div className={styles.main__content}>
            {/*<OfferBlock*/}
            {/*  srcImg={offer_1}*/}
            {/*  idCategory="2"*/}
            {/*  nameCategory="Букеты из клубники с цветами"*/}
            {/*  title="Букеты из клубники с цветами"*/}
            {/*  subtitle="Ароматная клубника в бельгийском шоколаде"*/}
            {/*  position="center"*/}
            {/*/>*/}
            {/*<OfferBlock*/}
            {/*  srcImg={offer_2}*/}
            {/*  idCategory="4"*/}
            {/*  nameCategory="Детская коллекция"*/}
            {/*  title="Детская коллекция"*/}
            {/*  subtitle="Детская коллекция"*/}
            {/*  position="start"*/}
            {/*/>*/}

            {/*<OfferBlock*/}
            {/*  srcImg={offer_1}*/}
            {/*  idCategory="5"*/}
            {/*  nameCategory="Воздушные шары"*/}
            {/*  title="Воздушные шары"*/}
            {/*  subtitle="Воздушные шары"*/}
            {/*  position="center"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*<div className={styles.subtitle}> ~ о нас ~ </div>*/}
            <div style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptates explicabo quisquam distinctio alias
              beatae commodi consequatur maiores, atque, molestias suscipit 
              maxime eos sit vel aliquam libero aspernatur.
              Qui, mollitia ipsam. Quibusdam deserunt ad quisquam cumque 
              labore quaerat porro ipsam quidem, eum officiis
              ducimus eligendi consequatur. Vel qui, eligendi aliquam, 
              eveniet facilis cumque amet ipsa eos doloribus
              dicta nam accusantium autem?</div>
          </div>
        </Container>
        <Icon id="mainLineDown" />
      </main>
    </>
  );
};
