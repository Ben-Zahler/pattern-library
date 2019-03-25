import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Molecules/Datepicker', module)
  .add('Datepicker', () => `<axa-datepicker allowedyears='[2019, 2020, 2021]' year='2020' month="3" day="20"></axa-datepicker>`)
  .add(
    'Datepicker Translated',
    () => `<axa-datepicker allowedyears='[2019, 2020, 2021]' year='2020' month="3" day="20" locale='en-GB' id="datepicker-translated"
    ></axa-datepicker>`
  )
  .add(
    'Datepicker Input',
    () => `
    <axa-datepicker inputfield year="2019" month="1" day="1" id="datepicker-input-2019"></axa-datepicker>
    <axa-datepicker inputfield year="2020" month="2" day="2" id="datepicker-input-2020"></axa-datepicker>
    <axa-datepicker inputfield year="2021" month="3" day="3" id="datepicker-input-2021"></axa-datepicker>
    `
  );
