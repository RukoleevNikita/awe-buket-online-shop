import React from 'react';

import { Container, MainWrapper } from '../../components';
import { ContaiMainWrapperner } from '../../components';

import styles from './Certificates.module.scss';

export const Certificates = () => {
  return (
    <Container>
      <MainWrapper>
        <h1 className={styles.title}>Pege Certificates</h1>
      </MainWrapper>
    </Container>
  );
};
