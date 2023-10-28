import React from 'react';

import { Container } from '../../components';
import { MainWrapper } from '../../components';

import styles from './CorporativeClients.module.scss';

export const CorporativeClients = () => {
  return (
    <Container>
      <MainWrapper>
        <div className={styles.corporativeClients}>
          <h1 className={styles.corporativeClients_title}>Корпоративным клиентам</h1>
          <div className={styles.corporativeClients_description}>
            <p>
              Наша компания Awebuket уже 5 лет работает на рынке съедобных подарков в городе Омске. Мы являемся лидерами
              в этом деле.
            </p>
            <p>
              У нас команда из фудфлористов, мы беремся за корпоративные заказы любой сложности и любых объемов. У нас
              вы можете заказать корпоративные подарки с доставкой по Омску
            </p>

            <div>
              Если вас заинтересовало предложение, свяжитесь с нами!
              <p>
                Телефон: <span>+7 999 455 9503</span>
              </p>
              <p>
                Почта:
                <span>
                  <a href="mailto:awebuket@gmail.com"> awebuket@gmail.com</a>
                </span>
              </p>
              <p>
                Юридическое лицо:{' '}
                <span>Индивидуальный предприниматель Чулошникова Мария Вячеславовна ИНН 550726479371</span>
              </p>
              <p>
                Юридический адрес: <span>Омск, Ватутина 16</span>
              </p>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Container>
  );
};
