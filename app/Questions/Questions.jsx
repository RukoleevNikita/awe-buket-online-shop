import React from 'react';

import { Container } from '../../components';
import { MainWrapper } from '../../components';

import styles from './Questions.module.scss';

export const Questions = () => {
  return (
    <Container>
      <MainWrapper>
        <h1 className={styles.title}>Pege questions</h1>
      </MainWrapper>
    </Container>
  );
};
