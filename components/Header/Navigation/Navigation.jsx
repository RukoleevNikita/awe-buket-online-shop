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

export function Navigation({isActive, disabledMenu}) {
  const classes = [styles.navigation];
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  if(isActive) {
    classes.push(styles.active);
  }


  return (
    <>
      <nav className={classes.join(' ')}>
        <Container>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__list_item} style={{ position: 'relative' }}>
              <Link style={{ cursor: 'default' }} href="/collection/Наборы клубники в шоколаде" onClick={disabledMenu}>
                <Icon id="squares" />
                <span>Каталог</span>
              </Link>
              <div className={pathname.split('/').includes('collection') ? styles.hideDropdownCategoriesList : styles.dropdownCategoriesList}>
                <Categories params={''} />
              </div>
            </li>

            <li className={styles.navigation__list_item}>
              <Link href="/corporative-clients" onClick={disabledMenu}>Корпоративным клиентам</Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link href="/delivery" onClick={disabledMenu}>Доставка и оплата</Link>
            </li>
            <li className={styles.navigation__list_item} style={{ position: 'relative' }}>
              <Link style={{ cursor: 'default' }} href="/occasion/Маме" onClick={disabledMenu}>
                <span>Повод</span>
              </Link>
              <div className={pathname.split('/').includes('occasion') ? styles.hideDropdownOccasionList : styles.dropdownOccasionList}>
                <Subcategories params={''} />
              </div>
            </li>
            <li className={styles.navigation__list_item} style={{ position: 'relative', padding: '15px 0' }}>
              <Link href="/about-us" onClick={disabledMenu}>О нас</Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link href="/contacts" onClick={disabledMenu}>Контакты</Link>
            </li>
            <li className={styles.navigation__list_item}>
              <Link href="/questions" onClick={disabledMenu}>Вопросы и ответы</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </>
  );
}
