import Image from 'next/image';
import banner from '@/public/images/banner.jpg';

import styles from './Banner.module.scss';
export const Banner = () => (
  <div className={styles.banner}>
    <Image src={banner} alt="" />
  </div>
);
