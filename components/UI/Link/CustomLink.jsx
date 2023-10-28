// import { useMatch } from 'react-router-dom';
import Link from 'next/link';

import styles from './CustomLink.module.scss';
// Link.
export const CustomLink = ({ children, to, ...props }) => {
  const math = useMatch(to);

  return (
    <Link to={to} {...props} className={math ? `${styles.activeLink}` : `${styles.link}`}>
      {children}
    </Link>
  );
};
