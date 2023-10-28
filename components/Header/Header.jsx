// import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import { Container } from '../Container/Container';
import { Button } from '../UI/Button/Button';

import { Icon } from '../UI/Icon/Icon';

import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Container>
          <div className={styles.header__top_wrapper}>
            <div className={styles.header__top_socialNetworks}>
              <span>Написать нам:</span>
              <ul>
                <li>
                  <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="vk" color="#56392F" />
                  </Link>
                </li>
                <li>
                  <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="tg" color="#56392F" />
                  </Link>
                </li>
                <li>
                  <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="whatsapp" color="#56392F" />
                  </Link>
                </li>
                <li>
                  <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="viber" color="#56392F" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.header__top_contact}>
              <ul>
                <li>
                  <a href="mailto:awebuket@mail.ru">
                    <Icon id="mail" color="#56392F" />
                    <span>awebuket@mail.ru</span>
                  </a>
                </li>
                <li>
                  <a href="tel:8 (962) 055-57-45">8 (962) 055-57-45</a>
                  <span data-target="callback">Вам перезвонить?</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        {/* <div className={styles.header__top_wrapper}>
          <div className={styles.header__top_socialNetworks}>
            <span>Написать нам:</span>
            <ul>
              <li>
                <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                  <Icon id="vk" color="#56392F" />
                </Link>
              </li>
              <li>
                <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                  <Icon id="tg" color="#56392F" />
                </Link>
              </li>
              <li>
                <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                  <Icon id="whatsapp" color="#56392F" />
                </Link>
              </li>   
              <li>
                <Link to="#" rel="noopener noreferrer nofollow" target="_blank">
                  <Icon id="viber" color="#56392F" />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.header__top_contact}>
            <ul>
              <li>
                <a href="mailto:bubnov.evgen@mail.ru">
                  <Icon id="mail" color="#56392F" />
                  <span>bubnov.evgen@mail.ru</span>
                </a>
              </li>
              <li >
                <a href="tel:8 (962) 055-57-45">8 (962) 055-57-45</a>
                <span data-target="callback">Вам перезвонить?</span>
              </li>
								
            </ul>
          </div>
        </div> */}
      </div>
      <div className={styles.header__middle}>
        <Container>
          <div className={styles.header__middle_wrapper}>
            <Link to="/">
              <img src={logo} className={styles.header__middle_logo} alt="logo" />
              Awebuket | Съедобные букеты | Клубника Омск
            </Link>

            <Link to="/cart">
              <Button className={styles.header__middle_basket}>
                {totalPrice} ₽<span className={styles.header__middle_line}></span>
                <Icon id="cart" />
                {totalCount}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
      <Icon id="footerLineDown" />
      {/* <Navigation offsetY={offsetY} scrollY={scrollY} /> */}
    </header>
  );
};
