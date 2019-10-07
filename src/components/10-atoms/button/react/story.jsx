/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import AXAButton from './AXAButton';
import { iconOptions } from '../../icon/story';
import Readme from './../README.md';

const variantOptions = {
  default: '',
  red: 'red',
  secondary: 'secondary',
  inverted: 'inverted',
  'Inverted-blue-ocean': 'inverted-blue-ocean',
  'inverted-red-tosca': 'inverted-red-tosca',
  'inverted-purple-logan': 'inverted-purple-logan',
  'inverted-green-viridian': 'inverted-green-viridian',
  'inverted-blue-teal': 'inverted-blue-teal',
};

const sizeOptions = {
  default: '',
  large: 'large',
  small: 'small',
};

const typesOptions = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
};

const invertedBgs = {
  inverted: '#00008f',
  'inverted-blue-ocean': '#4976ba',
  'inverted-red-tosca': '#914146',
  'inverted-purple-logan': '#9190ac',
  'inverted-green-viridian': '#668980',
  'inverted-blue-teal': '#027180',
};

const storyButton = storiesOf('Atoms/Button/React', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyButton.add('Button', () => {
  const buttonText = text('text', 'Click me');
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('icon', iconOptions, '');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const types = radios('types', typesOptions, 'button');

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <div style={{ backgroundColor: invertedBgs[variants], padding: '10px' }}>
      <AXAButton
        type={types}
        variant={variants}
        className='myCssClass'
        size={sizes}
        icon={icons}
        disabled={disabled}
        motionOff={motionOff}
      >
        {buttonText}
      </AXAButton>
    </div>,
    wrapper
  );

  return wrapper;
});
