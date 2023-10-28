import banner from '../../assets/images/banner.jpg';

import styles from './Banner.module.scss';
export const Banner = (props) => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="" />
    </div>
  );
};
