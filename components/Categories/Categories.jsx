import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Categories.module.scss';

export const Categories = ({ eventHandler, activeIndex }) => {
  const CATEGORIES = [
    'Наборы клубники в шоколаде',
    'Букеты из клубники в шоколаде',
    'Букеты из клубники с цветами',
    'Премиум',
    'Детская коллекция ',
    'Воздушные шары',
    'Комбо-наборы',
    'Мужские букеты',
    'Ореховые и сухофруктовые букеты',
    'Букеты из шоколадных цветов',
    'Шоколад ручной работы',
    'Фруктовые букеты',
    'Цветы',
    'Открытки и топперы',
  ];
  const location = useLocation();
  // if (location.state != null) activeIndex = location.state.id;

  return (
    <ul
      className={
        location.pathname === '/collection' ? styles.category__navigation : styles.category__navigation_pullDownMenu
      }
    >
      {CATEGORIES.map((el, id) => (
        <li
          key={id}
          onClick={() => eventHandler(id, CATEGORIES[id])}
          className={location.pathname === '/collection' && activeIndex === id ? styles.active : ''}
        >
          <span>{el}</span>
        </li>
      ))}
    </ul>
  );
};
