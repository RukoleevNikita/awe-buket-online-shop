import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Button } from '../../../components';
import { Input, Select } from '../../index';

import styles from './CartFormDelivery.module.scss';

export const CartFormDelivery = () => {
  const [formDeliveryData, setFormDeliveryData] = useState({
    nameField: '',
    phoneField: '',
    dateField: '',
    timeField: '',
  });
  const formDeliveryDataHandler = (data, field) => {
    switch (field) {
      case 'nameField':
        setFormDeliveryData((prevData) => ({
          ...prevData,
          nameField: data,
        }));
        break;
      case 'phoneField':
        setFormDeliveryData((prevData) => ({
          ...prevData,
          phoneField: data,
        }));
        break;
      case 'dateField':
        setFormDeliveryData((prevData) => ({
          ...prevData,
          dateField: data,
        }));
        break;
      case 'timeField':
        setFormDeliveryData((prevData) => ({
          ...prevData,
          timeField: data,
        }));
        break;
      default:
        return null;
    }
  };
  const options = ['Option 1', 'Option 2', 'Option 3'];
  // console.log('formDeliveryData ', formDeliveryData);
  return (
    <form>
      <div className={styles.title}>Самовывоз</div>
      <Input
        label="ФИО (Заказчика)"
        type="text"
        name="nameField"
        value={formDeliveryData.nameField}
        onChange={(e) => formDeliveryDataHandler(e.target.value, 'nameField')}
      />
      {/* переписать стили */}
      <div className={styles.inputContainer}>
        <label>Контактный телефон (Заказчика)</label>
        <InputMask
          alwaysShowMask={true}
          name="phoneField"
          mask="+7(999)999-99-99"
          value={formDeliveryData.phoneField}
          onChange={(e) => formDeliveryDataHandler(e.target.value, 'phoneField')}
        />
      </div>
      <div className={styles.paramsDelivery}>
        <Input
          label="Дата самовывоза"
          type="date"
          name="dateField"
          value={formDeliveryData.dateField}
          onChange={(e) => formDeliveryDataHandler(e.target.value, 'dateField')}
        />
        <Select
          label="Время самовывоза"
          options={options}
          name="timeField"
          value={formDeliveryData.timeField}
          onChange={(e) => formDeliveryDataHandler(e, 'timeField')}
        />
      </div>
      <Button type="submit">Оформить заказ</Button>
    </form>
  );
};

// Дата и время на которые нужен заказ
// Сам заказ
// Оплата: при получении/онлайн
