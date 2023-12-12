import { useState, useEffect, useMemo } from 'react';

import styles from './Subcategories.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SUBCATEGORIES = [
  {
    Кому: ['Маме', 'Любимой', 'Мужчине', 'Коллеге']
  },
  {
    Событие: ['День рождения', 'Свадьба', 'Рождение ребенка', 'Выпускной', 'Последний звонок', 'Годовщина']
  },
  {
    Праздник: ['1 сентября, учителю', 'День матери', 'Новый год', '14 февраля', '23 февраля', '8 марта', 'День семьи']
  }
];

export const Subcategories = ({ selectCategory }) => {

  const [columns, setColumns] = useState([]);

  const pathname = usePathname();
  const trigger = pathname.split('/').includes('occasion');
  useEffect(() => {
    const columnsData = SUBCATEGORIES.map(category => {
      const [columnTitle, columnData] = Object.entries(category)[0];

      return (
        <div key={columnTitle}>
          {/*<div key={columnTitle}>*/}
          <h4>{`${columnTitle}: `}</h4>
          {columnData.map((el, id) => (
            <Link key={id} href={{ pathname: `/occasion/${el}` }} className={selectCategory === el && trigger ? styles.active : ''}>
              {el}
            </Link>
          ))}
        </div>
      );
    });
    setColumns(columnsData);
  }, [SUBCATEGORIES, selectCategory, trigger]);

  return <nav className={trigger ? styles.subcategories__navigation : 
    styles.subcategories__dropdownList}>{columns}</nav>;
};
