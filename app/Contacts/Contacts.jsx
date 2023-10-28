import React from 'react';

import { Container } from '../../components';
import { MainWrapper } from '../../components';

import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <Container>
      <MainWrapper>
        <h1 className={styles.title}>Pege Contacts</h1>
      </MainWrapper>
    </Container>
  );
};
