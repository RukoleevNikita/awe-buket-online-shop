import React from 'react';

import { Container, MainWrapper } from '../../components';

import styles from './Questions.module.scss';

export const Questions = () => (
  <Container>
    <MainWrapper>
      <h1 className={styles.title}>Pege questions</h1>
    </MainWrapper>
  </Container>
);
