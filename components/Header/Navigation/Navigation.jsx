import { motion, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import { useHover } from '../../../hooks/useHover';
import useScrollPosition from '../../../hooks/useScrollPosition';
import { useSort } from '../../../hooks/useSort';
import { Categories } from '../../Categories/Categories';
import { Container } from '../../Container/Container';
import { Subcategories } from '../../Subcategories/Subcategories';
import { Button } from '../../UI/Button/Button';
import { Icon } from '../../UI/Icon/Icon';
import { CustomLink } from '../../UI/Link/CustomLink';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  // переписать css
  const [hoverLink, isHoveringLink] = useHover();
  const [hoverOfferBlock, isHoveringOfferBlock] = useHover();
  const [test, isTest] = useHover();
  const [hoverPageBlock, isHoverPageBlock] = useHover();
  const [activeIndex, setActiveIndex] = useState();
  const [category, setCategory] = useState();
  const scrollPosition = useScrollPosition();

  // const { sortedProduct, setIsSort } = useSort(products.items || []);
  const { totalPrice } = useSelector((state) => state.cart);
  const setActive = ({ isActive }) => (isActive ? `${styles.activeLink}` : '');
  const scroll = scrollPosition > 175;

  const navigate = useNavigate();
  const location = useLocation();

  const eventHandlerCategories = (id, category) => {
    setCategory(category);
    navigate('/collection', { state: { id, category } });
  };
  const eventHandlerSubcategories = (id, subcategories) => {
    setCategory(subcategories);
    navigate('/occasion', { state: { id, occasion: subcategories } });
  };
  // Переписать!!!!!!!!!!
  return (
    <>
      <nav className={styles.navigation} style={{ opacity: scroll ? '0' : '1' }}>
        <Container>
          <ul className={styles.navigation__list}>
            <li style={{ position: 'relative' }}>
              <CustomLink style={{ cursor: 'default' }} to="#" className={setActive}>
                <Icon id="squares" />
                <span>Каталог</span>
              </CustomLink>
              <div
                className={
                  location.pathname === '/collection'
                    ? styles.hideDropdownCategoriesList
                    : styles.dropdownCategoriesList
                }
              >
                <Categories activeIndex={activeIndex} eventHandler={eventHandlerCategories} />
              </div>
            </li>

            <li>
              <CustomLink to="/corporative-clients" className={setActive}>
                Корпоративным клиентам
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/delivery" className={setActive}>
                Доставка и оплата
              </CustomLink>
            </li>
            <li style={{ position: 'relative' }}>
              <CustomLink style={{ cursor: 'default' }} to="#" className={setActive}>
                <span>Повод</span>
              </CustomLink>
              <div
                className={
                  location.pathname === '/occasion' ? styles.hideDropdownOccasionList : styles.dropdownOccasionList
                }
              >
                <Subcategories activeCategory={category} eventHandler={eventHandlerSubcategories} />
              </div>
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
              <CustomLink to="/about-us" className={setActive}>
                О нас
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/contacts" className={setActive}>
                Контакты
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/questions" className={setActive}>
                Вопросы и ответы
              </CustomLink>
            </li>
          </ul>
        </Container>
      </nav>

      <nav className={styles.customNavigation} style={{ opacity: scroll ? '1' : '0' }}>
        <Container>
          <div className={styles.customNavigation__wrapper}>
            <ul className={styles.customNavigation__list}>
              <li>
                <Link to="/">
                  <img src={logo} className={styles.navigation__logo} alt="logo" />
                </Link>
              </li>
              <li ref={hoverOfferBlock}>
                <CustomLink to="/collection" className={setActive}>
                  <Icon id="squares" />
                  <span>Каталог</span>
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/corporative-clients" className={setActive}>
                  Корпоративным клиентам
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/delivery" className={setActive}>
                  Доставка и оплата
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/occasion" className={setActive}>
                  Повод
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/about-us" className={setActive}>
                  О нас
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/contacts" className={setActive}>
                  Контакты
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/questions" className={setActive}>
                  Вопросы и ответы
                </CustomLink>
              </li>
              <li>
                <Link to="/cart">
                  <Icon id="cartRed" />
                  {totalPrice} ₽
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
};
