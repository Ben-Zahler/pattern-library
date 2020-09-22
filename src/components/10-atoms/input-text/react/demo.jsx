/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoInputText from './DemoInputText';
import Changelog from '../CHANGELOG.md';
import DemoInputTextOnInputfieldKeyUp
  from "../../../10-atoms/input-text/react/DemoInputTextOnInputfieldKeyUp";

storiesOf('Examples/Input Text/React', module)
  .addParameters({
    changelog: Changelog,
  })
  /* Default */
  .add('Controlled/uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputText />, div);
    return div;
  })
  .add('Using onInputfieldKeyUp event', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemoInputTextOnInputfieldKeyUp />, div);
    return div;
  });
