'use client';
import { usePathname, useSearchParams, useRouter, redirect, RedirectType, permanentRedirect, useParams } from 'next/navigation';
// import { motion, useTransform } from 'framer-motion';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
//
// import logo from '../../../assets/images/logo.png';
// import { useHover } from '../../../hooks/useHover';
// import useScrollPosition from '../../../hooks/useScrollPosition';
// import { useSort } from '../../../hooks/useSort';
// import { Categories } from '../../Categories/Categories';
// import { Container } from '../../Container/Container';
// import { Subcategories } from '../../Subcategories/Subcategories';
// import { Button } from '../../UI/Button/Button';
// import { Icon } from '../../UI/Icon/Icon';
// import { CustomLink } from '../../UI/Link/CustomLink';

import styles from './Navigation.module.scss';
import { Categories, Container, Icon } from '@/components';
import Link from 'next/link';
import { Subcategories } from '@/components/Subcategories/Subcategories';

export function Navigation({ isActive, disabledMenu }) {
  const classes = [styles.navigation];
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  if (isActive) {
    classes.push(styles.active);
  }

  const menuItems = [
    {
      id: 1,
      name: 'Корпоративным клиентам',
      link: '/corporative-clients'
    },
    {
      id: 2,
      name: 'Доставка и оплата',
      link: '/delivery'
    },
    {
      id: 3,
      name: 'Повод',
      chapter: '/occasion',
      link: '/occasion/Маме',
      children: (
        <div className={pathname.split('/').includes('occasion') ? styles.hideDropdownOccasionList : styles.dropdownOccasionList}>
          <Subcategories params={''} />
        </div>
      )
    },
    {
      id: 4,
      name: 'О нас',
      link: '/about-us'
    },
    {
      id: 5,
      name: 'Контакты',
      link: '/contacts'
    },
    {
      id: 6,
      name: 'Вопросы и ответы',
      link: '/questions'
    }
  ];

  return (
    <>
      <nav className={classes.join(' ')}>
        <Container>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__list_catlog}>
              <Link style={{ cursor: 'default' }} href="/collection/Наборы клубники в шоколаде" onClick={disabledMenu}>
                <Icon id="squares" />
                <span>Каталог</span>
              </Link>
              <div className={pathname.split('/').includes('collection') ? styles.hideDropdownCategoriesList : styles.dropdownCategoriesList}>
                <Categories params={''} />
              </div>
            </li>

            {menuItems.map(item => {
              let cls = [styles.navigation__list_item];
              let link = (item.link).slice(1, -1).split('/')[0];
              if (pathname.includes(link)) {
                cls.push(styles.active);
              }
              if (item.children) {
                return (
                  <li key={item.id} className={cls.join(' ')}>
                    <Link href={item.link} onClick={disabledMenu}>
                      {item.name}
                    </Link>
                    <div className={pathname.split('/').includes('occasion') ? styles.hideDropdownOccasionList : styles.dropdownOccasionList}>
                      <Subcategories params={''} />
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.id} className={cls.join(' ')}>
                  <Link href={item.link} onClick={disabledMenu}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>
    </>
  );
}
