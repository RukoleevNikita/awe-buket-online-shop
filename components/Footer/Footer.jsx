// import React from 'react';

import { Icon } from '../UI/Icon/Icon';

import { FooterContent } from './Content/FooterContent';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Icon id="footerLineUp" />
      <FooterContent />
      <Icon id="footerLineDown" />
    </footer>
  );
};
