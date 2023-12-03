// import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import logo from '../../../assets/images/logo.png';
import logo from '@/public/images/logo.png';
// import { Container } from '../../Container/Container';
import { Container } from '../../index';
import { Icon } from '../../UI/index';

import styles from './FooterContent.module.scss';

export const FooterContent = () => {
  return (
    <div className={styles.footerContent}>
      <Container>
        <div className={styles.footerContent_wrapper}>
          <div className={styles.footerContent__blockOne}>
            <ul>
              <li>
                <Link href="/">
                  <Image src={logo} className={styles.footerContent__blockOne_logo} alt="logo" />
                </Link>
                Awebuket | Съедобные букеты | Клубника Омск
              </li>
              <li>8 (962) 055-57-45</li>
              <li>
                <Icon id="mail" color="white" />
                <a href="mailto:awebuket@mail.ru">
                  <span>awebuket@mail.ru</span>
                </a>
              </li>
              <li>
                <Icon id="geo" />
                Санкт-Петербург, ул.Решетникова, 17/2
              </li>
              <li>
                <Icon id="time" />
                Ежедневно с 9.00 до 21.00
              </li>
              <li className={styles.footerContent__blockOne_socialNetworks}>
                <span>Написать нам:</span>
                <ul>
                  <li>
                    <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                      <Icon id="vk" color="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                      <Icon id="tg" color="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                      <Icon id="whatsapp" color="white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" rel="noopener noreferrer nofollow" target="_blank">
                      <Icon id="viber" color="white" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <div>content block 2</div>
          <div>content block 3</div> */}
        </div>
      </Container>
    </div>
  );
};
