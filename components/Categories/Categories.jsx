'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Categories.module.scss';
export function Categories({ selectCategory }) {
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
  const pathname = usePathname();
  const trigger = pathname.split('/').includes('collection');
  return (
    <ul
      className={
        trigger ? styles.category__navigation : styles.category__dropdownList
      }
    >
      {CATEGORIES.map((el, id) => (
        <Link
          href={{ pathname: `/collection/${el}` }}
          key={id}
          className={selectCategory === el && trigger ? styles.active : ''}
        >
          <span>{el}</span>
        </Link>
      ))}
    </ul>
  );
};
