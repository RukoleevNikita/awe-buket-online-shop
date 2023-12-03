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

export function Navigation() {
  const pathname = usePathname();
  const links = [
    {
      id: 1,
      href: '/corporative-clients',
      name: 'Корпоративным клиентам'
    },
    {
      id: 2,
      href: '/delivery',
      name: 'Доставка и оплата'
    },
    {
      id: 3,
      href: '#',
      name: 'Повод'
    },
    {
      id: 4,
      href: '/about-us',
      name: 'О нас'
    },
    {
      id: 5,
      href: '/contacts',
      name: 'Контакты'
    },
    {
      id: 6,
      href: '/questions',
      name: 'Вопросы и ответы'
    }
  ];
  // переписать css
  // const [hoverLink, isHoveringLink] = useHover();
  // const [hoverOfferBlock, isHoveringOfferBlock] = useHover();
  // const [test, isTest] = useHover();
  // const [hoverPageBlock, isHoverPageBlock] = useHover();
  const [activeIndex, setActiveIndex] = useState();
  const [category, setCategory] = useState();
  // const scrollPosition = useScrollPosition();
  //
  // // const { sortedProduct, setIsSort } = useSort(products.items || []);
  // const { totalPrice } = useSelector(state => state.cart);
  // const setActive = ({ isActive }) => (isActive ? `${styles.activeLink}` : '');
  // const scroll = scrollPosition > 175;
  //
  // const navigate = useNavigate();
  // const location = useLocation();
  //
  console.log(pathname);
  const eventHandlerCategories = (id, category) => {
    setCategory(category);
    // test.push('http://localhost:3001/collection', {scroll: true});
    // console.log(category);

    // console.log(category);
    // navigate('/collection', { state: { id, category } });
  };
  // const eventHandlerSubcategories = (id, subcategories) => {
  //   setCategory(subcategories);
  //   navigate('/occasion', { state: { id, occasion: subcategories } });
  // };
  // Переписать!!!!!!!!!!
  return (
    <>
      {/*<nav className={styles.navigation} style={{ opacity: scroll ? '0' : '1' }}>*/}
      <nav className={styles.navigation}>
        <Container>
          <ul className={styles.navigation__list}>
            <li>
              <Link href="#">
                <Icon id="squares" />
                <span>Каталог</span>
              </Link>
              <div className={pathname === '/collection' ? styles.hideDropdownCategoriesList : styles.dropdownCategoriesList}>
                <Categories params={''} />
              </div>
            </li>

            {links.map(link => (
              <li
                key={link.id}
                className={link.href == pathname ? styles.navigation__li + ' ' + styles.navigation__li_active : styles.navigation__li}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  );
}
