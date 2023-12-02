'use client';
import { usePathname, useSearchParams, useRouter, redirect, RedirectType, permanentRedirect, useParams} from 'next/navigation';
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

export function Navigation() {
  const pathname = usePathname();
  const test = useRouter();
  const test1 = useParams();
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
  const eventHandlerCategories = (id, category) => {
    setCategory(category);
    // test.push('http://localhost:3001/collection', {scroll: true});
    console.log(test1);
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
            <li style={{ position: 'relative' }}>
              {/*<Link style={{ cursor: 'default' }} href="#" className={setActive}>*/}
              <Link style={{ cursor: 'default' }} href="#">
                <Icon id="squares" />
                <span>Каталог</span>
              </Link>
              <div className={pathname.split('/').includes('collection') ? styles.hideDropdownCategoriesList : styles.dropdownCategoriesList}>
                <Categories params={''} />
              </div>
            </li>

            <li>
              {/*<Link href="/corporative-clients" className={setActive}>*/}
              <Link href="/corporative-clients">
                Корпоративным клиентам
              </Link>
            </li>
            <li>
              {/*<Link href="/delivery" className={setActive}>*/}
              <Link href="/delivery">
                Доставка и оплата
              </Link>
            </li>
            <li style={{ position: 'relative' }}>
              <li style={{ position: 'relative' }}>
                {/*<Link style={{ cursor: 'default' }} href="#" className={setActive}>*/}
                <Link style={{ cursor: 'default' }} href="#">
                  <span>Повод</span>
                </Link>
                {/*<div className={pathname === '/collection' ? styles.hideDropdownOccasionList : styles.dropdownOccasionList}>*/}
                <div className={pathname === '/occasion' ? styles.hideDropdownOccasionList : styles.dropdownOccasionList}>
                  {/*<Categories activeIndex={activeIndex} eventHandler={eventHandlerCategories} />*/}
                  <Subcategories params={''} />
                </div>
              </li>
              {/*<Link style={{ cursor: 'default' }} href="#" className={setActive}>*/}
              {/*<Link style={{ cursor: 'default' }} href="#">*/}
              {/*  <span>Повод</span>*/}
              {/*</Link>*/}
              {/*<div className={location.pathname === '/occasion' ? styles.hideDropdownOccasionList : styles.dropdownOccasionList}>*/}
              {/*<Subcategories activeCategory={category} eventHandler={eventHandlerSubcategories} />*/}
              {/*</div>*/}
            </li>
            {/* <li style={{ position: 'relative', padding: '15px 0' }}>
              <CustomLink to="#" className={setActive}>
                О нас
              </CustomLink>
              <ul className={styles.dropdownAboutUsList}>
                <li>
                  <CustomLink to="/certificates" className={setActive}>
                    Сертификаты
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to="#" className={setActive}>
                    Обучение
                  </CustomLink>
                </li>
              </ul>
            </li> */}
            <li style={{ position: 'relative', padding: '15px 0' }}>
              {/*<Link href="/about-us" className={setActive}>*/}
              <Link href="/about-us">
                О нас
              </Link>
            </li>
            <li>
              {/*<Link href="/contacts" className={setActive}>*/}
              <Link href="/contacts">
                Контакты
              </Link>
            </li>
            <li>
              {/*<Link href="/questions" className={setActive}>*/}
              <Link href="/questions">
                Вопросы и ответы
              </Link>
            </li>
          </ul>
        </Container>
      </nav>

      {/*<nav className={styles.customNavigation} style={{ opacity: scroll ? '1' : '0' }}>*/}
      {/*  <Container>*/}
      {/*    <div className={styles.customNavigation__wrapper}>*/}
      {/*      <ul className={styles.customNavigation__list}>*/}
      {/*        <li>*/}
      {/*          <Link to="/">*/}
      {/*            <img src={logo} className={styles.navigation__logo} alt="logo" />*/}
      {/*          </Link>*/}
      {/*        </li>*/}
      {/*        <li ref={hoverOfferBlock}>*/}
      {/*          <CustomLink to="/collection" className={setActive}>*/}
      {/*            <Icon id="squares" />*/}
      {/*            <span>Каталог</span>*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <CustomLink to="/corporative-clients" className={setActive}>*/}
      {/*            Корпоративным клиентам*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <CustomLink to="/delivery" className={setActive}>*/}
      {/*            Доставка и оплата*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <CustomLink to="/occasion" className={setActive}>*/}
      {/*            Повод*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <CustomLink to="/about-us" className={setActive}>*/}
      {/*            О нас*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <CustomLink to="/contacts" className={setActive}>*/}
      {/*            Контакты*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <CustomLink to="/questions" className={setActive}>*/}
      {/*            Вопросы и ответы*/}
      {/*          </CustomLink>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <Link to="/cart">*/}
      {/*            <Icon id="cartRed" />*/}
      {/*            {totalPrice} ₽*/}
      {/*          </Link>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</nav>*/}
    </>
  );
}

