/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAButtonReact from './AXAButtonReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Button/React', module)
  .addDecorator(withMarkdown(Readme))

  /* Default */
  .add('Button - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAButtonReact>Default</AXAButtonReact>, div);
    return div;
  })

  /* Variants */
  .add('Button - variant: red', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAButtonReact variant="red">Red</AXAButtonReact>, div);
    return div;
  })
  .add('Button - variant: secondary', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonReact variant="secondary">Secondary</AXAButtonReact>,
      div
    );
    return div;
  })
  .add('Button - variant: inverted', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div
        style={{
          backgroundColor: '#00008f',
          width: '500px',
          height: '100px',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
      >
        <AXAButtonReact variant="inverted">Inverted</AXAButtonReact>
      </div>,
      div
    );
    return div;
  })
  .add('Button - variant: inverted-green', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div
        style={{
          backgroundColor: '#027180',
          width: '500px',
          height: '100px',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
      >
        <AXAButtonReact variant="inverted-green">Inverted-Green</AXAButtonReact>
      </div>,
      div
    );
    return div;
  })
  .add('Button - variant: inverted-dark-blue', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div
        style={{
          backgroundColor: '#00005b',
          width: '500px',
          height: '100px',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
      >
        <AXAButtonReact variant="inverted-dark-blue">
          inverted-dark-blue
        </AXAButtonReact>
      </div>,
      div
    );
    return div;
  })

  /* Disabled */
  .add('Button - disabled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAButtonReact disabled>Disabled</AXAButtonReact>, div);
    return div;
  })

  /* Type */
  .add('Button - variant: inverted-dark-blue', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div>
        <AXAButtonReact>Button</AXAButtonReact>
        <AXAButtonReact type="submit">Submit</AXAButtonReact>
        <AXAButtonReact type="reset">Reset</AXAButtonReact>
      </div>,
      div
    );
    return div;
  })

  /* Large */
  .add('Button - large', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAButtonReact large>Large</AXAButtonReact>, div);
    return div;
  })

  /* MotionOff */
  .add('Button - motionOff', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div>
        <AXAButtonReact motionoff>MotionOff</AXAButtonReact>
        <AXAButtonReact motionoff variant="red">
          MotionOff + Red
        </AXAButtonReact>
        <AXAButtonReact motionoff variant="secondary">
          MotionOff + Secondary
        </AXAButtonReact>
        <AXAButtonReact motionoff variant="inverted">
          MotionOff + Inverted
        </AXAButtonReact>
      </div>,
      div
    );
    return div;
  })

  /* Icon */
  .add('Button - icon', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonReact icon="arrow-right">Icon</AXAButtonReact>,
      div
    );
    return div;
  });
