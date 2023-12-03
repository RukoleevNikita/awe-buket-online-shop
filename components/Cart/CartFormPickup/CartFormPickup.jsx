// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import InputMask from 'react-input-mask';
// import { Button , Input, Select } from '../../../components';
import styles from './CartFormPickup.module.scss';
import InputMask from 'react-input-mask';
import { Button, Input } from '@/components';
import { useState } from 'react';
import { Select } from '@/components/UI/Select/Select';

export const CartFormPickup = () => {
  const [formPickupData, setFormPickupData] = useState({
    customerNameField: '', // ФИО (Заказчика)
    customerPhoneNumberField: '', // Контактный телефон (Заказчика)
    adressField: '', // Адрес доставки
    recipientPhoneNumber: '', // Номер телефона (Получателя)
    recipientNameField: '', // ФИО (Получателя)
    dateField: '',
    timeField: '',
  });
  const formPickupDataHandler = (data, field) => {
    switch (field) {
    case 'customerNameField':
      setFormPickupData(prevData => ({
        ...prevData,
        customerNameField: data,
      }));
      break;
    case 'customerPhoneNumberField':
      setFormPickupData(prevData => ({
        ...prevData,
        customerPhoneNumberField: data,
      }));
      break;
    case 'adressField':
      setFormPickupData(prevData => ({
        ...prevData,
        adressField: data,
      }));
      break;
    case 'recipientPhoneNumber':
      setFormPickupData(prevData => ({
        ...prevData,
        recipientPhoneNumber: data,
      }));
      break;
    case 'recipientNameField':
      setFormPickupData(prevData => ({
        ...prevData,
        recipientNameField: data,
      }));
      break;
    case 'dateField':
      setFormPickupData(prevData => ({
        ...prevData,
        dateField: data,
      }));
      break;
    case 'timeField':
      setFormPickupData(prevData => ({
        ...prevData,
        timeField: data,
      }));
      break;
    default:
      return null;
    }
  };
  // console.log('formPickupData ', formPickupData);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <form>
      <div className={styles.title}>Доставка</div>
      <Input
        label="ФИО (Заказчика)"
        type="text"
        value={formPickupData.customerNameField}
        onChange={e => formPickupDataHandler(e.target.value, 'customerNameField')}
        name="customerNameField"
      />
      {/* переписать стили */}
      <div className={styles.inputContainer}>
        <label>Контактный телефон (Заказчика)</label>
        <InputMask
          alwaysShowMask={true}
          name="customerPhoneNumberField"
          mask="+7(999)999-99-99"
          value={formPickupDataHandler.customerPhoneNumberField}
          onChange={e => formPickupDataHandler(e.target.value, 'customerPhoneNumberField')}
        />
      </div>
      <Input
        label="Адрес доставки"
        type="text"
        value={formPickupData.adressField}
        onChange={e => formPickupDataHandler(e.target.value, 'adressField')}
        name="adressField"
      />
      {/* переписать стили */}
      <div className={styles.inputContainer}>
        <label>Номер телефона (Получателя)</label>
        <InputMask
          alwaysShowMask={true}
          name="recipientPhoneNumber"
          mask="+7(999)999-99-99"
          value={formPickupDataHandler.recipientPhoneNumber}
          onChange={e => formPickupDataHandler(e.target.value, 'recipientPhoneNumber')}
        />
      </div>
      <Input
        label="ФИО (Получателя)"
        type="text"
        value={formPickupData.recipientNameField}
        onChange={e => formPickupDataHandler(e.target.value, 'recipientNameField')}
        name="recipientNameField"
      />
      <div className={styles.paramsPickup}>
        <Input
          label="Дата доставки"
          type="date"
          value={formPickupData.dateField}
          onChange={e => formPickupDataHandler(e.target.value, 'dateField')}
          name="dateField"
        />
        <Select
          label="Время доставки"
          options={options}
          value={formPickupData.dateField}
          onChange={e => formPickupDataHandler(e, 'timeField')}
          name="timeField"
        />
      </div>
      <Button>Оформить заказ</Button>
    </form>
  );
};
