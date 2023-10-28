'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Categories.module.scss';
export function Categories({ params, onCategorySelect = () => undefined }) {
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
    'Открытки и топперы'
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };
  const pathname = usePathname();
  return (
    <ul
      className={
        // pathname === '/collection' ? styles.category__navigation : styles.category__navigation_pullDownMenu
        pathname === '/collection' ? styles.category__navigation : styles.category__dropdownList
      }
    >
      {CATEGORIES.map((el, id) => (
        <Link
          onClick={() => handleCategoryClick(el)}
          href={{ pathname: '/collection', query: { category: el } }}
          // href="#"
          key={id}
          className={el === params && pathname.split('/').includes('collection') ? styles.active : ''}
        >
          <span>{el}</span>
        </Link>
      ))}
    </ul>
  );
};
