/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import AXATextarea from './AXATextarea';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

const storyTextarea = storiesOf('Components|Atoms/Textarea/React', module);
storyTextarea.addDecorator(withKnobs);
storyTextarea.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

storyTextarea.add('Textarea', () => {
  const label = text('label', 'Please describe the course of events');
  const name = text('name', '');
  const refId = text('refId', '');
  const placeholder = text('placeholder', '');
  const error = text('error', '');
  const defaultValue = text('defaultValue', '');
  const checkMark = boolean('checkMark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const counter = text('counter', '');
  const counterMax = text('counterMax', '');
  const maxLength = text('maxLength', '');

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <AXATextarea
      refId={refId}
      name={name}
      label={label}
      placeholder={placeholder}
      error={error}
      counter={counter}
      counterMax={counterMax}
      maxLength={maxLength}
      checkMark={checkMark}
      disabled={disabled}
      required={required}
      invalid={invalid}
      defaultValue={defaultValue}
    />,
    wrapper
  );

  return wrapper;
});
