'use client';
import { Container, MainWrapper, ContaiMainWrapperner } from '../../components';

import styles from './Certificates.module.scss';

export default function Certificates() {
  return (
    <Container>
      <MainWrapper>
        <h1 className={styles.title}>Pege Certificates</h1>
      </MainWrapper>
    </Container>
  );
}
