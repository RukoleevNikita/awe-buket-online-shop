import React from 'react';
import { Link } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react'; // https://github.com/adexin/spinners-react

import { useHover } from '../../hooks/useHover';
import useOnScreen from '../../hooks/useOneScreen';

import styles from './ProductsCards.module.scss';

// ленивая загрузка

export const ProductsCards = ({ _id, description, previewLinks, name, price, viewsCount, onLoad = () => {} }) => {
  const [hoverBackgroundImage, isHoveringBackgroundImage] = useHover();
  const [hoverCardBlock, isHoveringCardBlock] = useHover();

  const [isLoaded, setIsLoaded] = React.useState(false);
  const imageRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const isVisible = useOnScreen(containerRef);
  React.useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (!imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      };
    }
  }, [isVisible, onLoad, isLoaded]);

  return (
    <div ref={containerRef}>
      {(isVisible || isLoaded) && (
        <div className={styles.product__card_wrapper} ref={hoverCardBlock}>
          <Link ref={hoverBackgroundImage} to={`/product/${_id}`}>
            <div
              ref={imageRef}
              style={{
                backgroundImage: isHoveringBackgroundImage ? `url(${previewLinks[1]})` : `url(${previewLinks[0]})`,
                backgroundSize: 'cover',
                paddingTop: '133%',
                borderRadius: '30px 30px 0 0',
                transition: '1s',
              }}
            >
              {' '}
            </div>
            {/* <div
            ref={imageRef}
            style={{'backgroundImage': `url(${previewUrl[0]})`, 'backgroundSize': 'cover', 'paddingTop': '133%', 'borderRadius': '30px 30px 0 0'}}
            onMouseOut={e  => (e.currentTarget.style.backgroundImage = `url(${previewUrl[0]})`, e.currentTarget.style.transition = '1s')}
            onMouseOver={e  => (e.currentTarget.style.backgroundImage = `url(${previewUrl[1]})`, e.currentTarget.style.transition = '1s')}
          ></div> */}
          </Link>

          <Link to={`/product/${_id}`} className={styles.product__card_title}>
            {name}
          </Link>
          <div className={styles.product__card_info}>
            <span>{price} ₽</span>
            <Link to={`/product/${_id}`} className={isHoveringCardBlock ? styles.wiggles : ''}>
              Выбрать
            </Link>
          </div>
          {/* <div className={styles.product__card_viewCounts}>
        Просмотры {viewsCount}
        </div> */}
        </div>
      )}
    </div>
  );
};
