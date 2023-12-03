import styles from './MainWrapper.module.scss';

export function MainWrapper({ children }) {
  return <main className={styles.wrapper}>{children}</main>;
}
