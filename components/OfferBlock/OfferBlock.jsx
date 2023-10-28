import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useHover } from '../../hooks/useHover';
import { Button } from '../UI/Button/Button';

import { Icon } from '../UI/Icon/Icon';

import styles from './OfferBlock.module.scss';

export const OfferBlock = ({ idCategory, nameCategory, title, subtitle, srcImg, position }) => {
  const [hoverOfferBlock, isHoveringOfferBlock] = useHover();

  const navigate = useNavigate();
  const goCat = () => navigate('/collection', { state: { id: Number(idCategory), category: `${nameCategory}` } }); // использовать для вывода категорий

  return (
    <div className={styles.offer} ref={hoverOfferBlock} style={{ justifyContent: `${position}` }}>
      <div>
        <span>
          {title}
          <Icon id="heart" />
        </span>
        <span>{subtitle}</span>
        <Button onClick={goCat} className={isHoveringOfferBlock ? styles.bounce : styles.none}>
          Перейти в каталог
          <strong>→</strong>
        </Button>
      </div>
      <img style={{ transform: isHoveringOfferBlock ? 'scale(1.2)' : '' }} src={srcImg} alt="" />
    </div>
  );
};
