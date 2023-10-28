import { useState, useMemo } from 'react';

export const useSort = (product, selected) => {
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

  const [selectedSort, setSelectedSort] = useState(selected);
  const sortedProduct = useMemo(() => {
    let sortableProduct = [...product];
    if (selectedSort === 'Все товары') return sortableProduct;
    if (CATEGORIES.includes(selectedSort)) {
      return sortableProduct.filter((e) => e.category === selectedSort);
    } else {
      return sortableProduct.filter((e) => e.occasion.find((k) => k === selectedSort));
    }
  }, [product, selectedSort]);

  return { sortedProduct, setSelectedSort };
};
