/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXADatepickerReact from './AXADatepickerReact';
import Readme from '../README.md';

storiesOf('Molecules/Datepicker/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Datepicker as React Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXADatepickerReact
        data-test-id="datepicker-react"
        locale="de-CH"
        day={25}
        month={1}
        labelbuttoncancel="Cancel"
        labelbuttonok="OK"
        allowedyears={['2019-2020', 2024]}
      />,
      div
    );
    return div;
  })
  .add('Datepicker with inputfield as React Component', () => {
    const div = document.createElement('div');
    const date = new Date('2020-01-25');
    ReactDOM.render(
      <AXADatepickerReact
        inputfield
        placeholder="Wählen Sie ein Datum"
        id="datepicker-react-inputfield"
        data-test-id="datepicker-react-inputfield"
        locale="de-CH"
        defaultValue="25.1.2020"
        date={date}
        onDateChange={newDate => {
          document.querySelector(
            'axa-datepicker[data-test-id="datepicker-react-inputfield"]'
          ).title = newDate;
        }}
        labelbuttoncancel="Abbrechen"
        labelbuttonok="OK"
        allowedyears={[2019, 2020]}
      />,
      div
    );
    return div;
  });
