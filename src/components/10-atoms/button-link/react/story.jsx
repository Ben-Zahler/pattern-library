/* global document */
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAButtonLinkReact from './AXAButtonLinkReact';
import { withMarkdown } from '../../../../../.storybook/addons/markdown';
import Readme from '../README.md';

storiesOf('Atoms/Button/React', module)
  .addDecorator(withMarkdown(Readme))
  .add('Button-Link - click event', () => {
    const btn = document.createElement('axa-button-link');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter} mal, btw my event name is click`;
    btn.addEventListener('click', e => {
      e.preventDefault();
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  })

  /* Default */
  .add('Button-Link - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAButtonLinkReact>Default</AXAButtonLinkReact>, div);
    return div;
  })

  /* External */
  .add('Button-Link - default', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonLinkReact href="https://axa.ch/" external>
        Default
      </AXAButtonLinkReact>,
      div
    );
    return div;
  })

  /* Variants */
  .add('Button-Link - variant: red', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonLinkReact variant="red">Red</AXAButtonLinkReact>,
      div
    );
    return div;
  })
  .add('Button-Link - variant: secondary', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonLinkReact variant="secondary">Secondary</AXAButtonLinkReact>,
      div
    );
    return div;
  })
  .add('Button-Link - variant: inverted', () => {
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
        <AXAButtonLinkReact variant="inverted">Inverted</AXAButtonLinkReact>
      </div>,
      div
    );
    return div;
  })
  .add('Button-Link - variant: inverted-green', () => {
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
        <AXAButtonLinkReact variant="inverted-green">
          Inverted-Green
        </AXAButtonLinkReact>
      </div>,
      div
    );
    return div;
  })
  .add('Button-Link - variant: inverted-dark-blue', () => {
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
        <AXAButtonLinkReact variant="inverted-dark-blue">
          inverted-dark-blue
        </AXAButtonLinkReact>
      </div>,
      div
    );
    return div;
  })

  /* Disabled */
  .add('Button-Link - disabled', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonLinkReact disabled>Disabled</AXAButtonLinkReact>,
      div
    );
    return div;
  })

  /* Large */
  .add('Button-Link - large', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAButtonLinkReact large>Large</AXAButtonLinkReact>, div);
    return div;
  })

  /* MotionOff */
  .add('Button-Link - motionOff', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div>
        <AXAButtonLinkReact motionoff>MotionOff</AXAButtonLinkReact>
        <AXAButtonLinkReact motionoff variant="red">
          MotionOff + Red
        </AXAButtonLinkReact>
        <AXAButtonLinkReact motionoff variant="secondary">
          MotionOff + Secondary
        </AXAButtonLinkReact>
        <AXAButtonLinkReact motionoff variant="inverted">
          MotionOff + Inverted
        </AXAButtonLinkReact>
      </div>,
      div
    );
    return div;
  })

  /* Icon */
  .add('Button-Link - icon', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AXAButtonLinkReact icon="arrow-right">Icon</AXAButtonLinkReact>,
      div
    );
    return div;
  });
