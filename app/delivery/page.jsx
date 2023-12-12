import { Container , MainWrapper } from '@/components';
import styles from './Delivery.module.scss';

export default function Delivery () {
  return (
    <Container>
      <MainWrapper>
        <div className={styles.delivery}>
          <h1 className={styles.delivery_title}>Доставка и оплата</h1>
          <div className={styles.delivery_wrapper}>
            <div className={styles.delivery_description}>
              <p>
                Режим работы: <br />
                <span>&#8195;&#8195;Самовывоз с 10:00 до 20:00</span>
              </p>
              <p>
                Обработка заявок: <br />
                <span>&#8195;&#8195;C 7:00 до 23:00, работаем 
                  без выходных </span>
              </p>
              <p>
                Выполняем срочные заказы: <br />
                <span>&#8195;&#8195;Доставим подарок в интервале от 1 до 
                  4 часов с момента размещения заказа</span>
              </p>
              <p>
                Оплата: <br />
                <span>
                  &#8195;&#8195;Наличными или картой в точках самовывоза <br />
                </span>
                <span>&#8195;&#8195;Переводом или наличными 
                  курьеру при получении</span>
              </p>
              <p>
                Доставка: <br />
                <span>&#8195;&#8195;Доставляем заказы с 07:00 до 00:00 </span>
              </p>
              <p>
                Стоимость доставки: <br />
                <span>&#8195;&#8195;С 9:00 до 21:00 - 350₽</span> <br />
                <span>&#8195;&#8195;С 7:00 до 9:00 и с 
                  21:00 до 00:00 - 500₽</span>
              </p>
            </div>
            <div className={styles.delivery_map}>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Container>
  );
};
