'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';
import { useStore } from '@/store';
import { useResize } from '@/hooks/useResize';
import { shallow } from 'zustand/shallow';
import { Button, Container, Icon } from '@/components';
import Hamburger from './Hamburger/Hamburger';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isClickHamburger, setIsClickHamburger] = useState(false);
  const [cart] = useStore(state => [state.cart], shallow);
  const size = useResize();

  const onHamburgerToggleHandler = () => {
    setIsClickHamburger(!isClickHamburger);
  };

  const disabledMenu = () => {
    setIsClickHamburger(false);
  };

  useEffect(() => {
    // console.log(isClickHamburger);
  }, [isClickHamburger]);

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Container>
          <div className={styles.header__top_wrapper}>
            <div className={styles.header__top_socialNetworks}>
              <span>Написать нам:</span>
              <ul>
                <li>
                  <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="vk" color="#56392F" />
                  </Link>
                </li>
                <li>
                  <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="tg" color="#56392F" />
                  </Link>
                </li>
                <li>
                  <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                    <Icon id="whatsapp" color="#56392F" />
                  </Link>
                </li>
                <li>
                  <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
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
      </div>
      <div className={styles.header__middle}>
        <Container>
          <div className={styles.header__middle_wrapper}>
            <div className={styles.header__logo}>
              <Link href="/" onClick={disabledMenu}>
                <Image src={logo} className={styles.header__logoImage} alt="logo" />
                <span className={styles.header__logoText}>
                  Awebuket | Съедобные букеты | Клубника Омск</span>
              </Link>
            </div>

            {size < 768 ? 
              <Hamburger onToggle={()=> onHamburgerToggleHandler() } 
                isClickHamburger={isClickHamburger}  /> : 
              null}

            <div className={styles.header__basket}>
              <Link href="/cart">
                <Button className={styles.header__basketBtn}>
                  {cart.totalPrice} ₽
                  <span className={styles.header__basketLine}></span>
                  <Icon id="cart" />
                  {cart.totalCount}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Icon id="footerLineDown" />
      <Navigation isActive={isClickHamburger} disabledMenu={disabledMenu} />
    </header>
  );
};

export default Header;
