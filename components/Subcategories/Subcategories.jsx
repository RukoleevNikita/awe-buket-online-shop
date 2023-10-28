import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Subcategories.module.scss';

export const Subcategories = ({ eventHandler, activeCategory }) => {
  const SUBCATEGORIES = [
    {
      Кому: ['Маме', 'Любимой', 'Мужчине', 'Коллеге'],
    },
    {
      Событие: ['День рождения', 'Свадьба', 'Рождение ребенка', 'Выпускной', 'Последний звонок', 'Годовщина'],
    },
    {
      Праздник: [
        '1 сентября, учителю',
        'День матери',
        'Новый год',
        '14 февраля',
        '23 февраля',
        '8 марта',
        'День семьи',
      ],
    },
  ];
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const columnsData = SUBCATEGORIES.map((category) => {
      const [columnTitle, columnData] = Object.entries(category)[0];
      return (
        <div key={columnTitle}>
          <h4>{`${columnTitle}: `}</h4>
          {columnData.map((el, id) => (
            <div key={id} onClick={() => eventHandler(id, el)}>
              {el}
            </div>
          ))}
        </div>
      );
    });
    setColumns(columnsData);
  }, []);

  return <>{columns}</>;
};
