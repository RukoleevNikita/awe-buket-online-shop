import React from 'react';

import { Container, MainWrapper } from '../../components';

import styles from './Contacts.module.scss';

export const Contacts = () => (
  <Container>
    <MainWrapper>
      <h1 className={styles.title}>Pege Contacts</h1>
    </MainWrapper>
  </Container>
);
