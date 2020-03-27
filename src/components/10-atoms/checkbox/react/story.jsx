/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs';
import AXACheckboxReact from './AXACheckboxReact';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

storiesOf('Components|Atoms/Checkbox/React', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .addDecorator(withKnobs)
  .add('Checkbox - uncontrolled', () => {
    const label = text('label', 'I agree to conditions of data protection.');
    const name = text('name', 'my-checkbox');
    const variant = select('variant', [
      'square',
      'checkmark',
      'inverted-checkmark',
    ]);
    const checked = boolean('checked', true);
    const disabled = boolean('disabled', false);
    const errortext = boolean('error', false);
    const required = boolean('required', false);
    const styled = boolean('styled', false);

    const div = document.createElement('div');

    if (variant && variant.indexOf('inverted') > -1) {
      div.style.backgroundColor = '#027180';
      div.style.padding = '10px';
    }

    ReactDOM.render(
      <AXACheckboxReact
        name={name}
        label={label}
        checked={checked}
        disabled={disabled}
        variant={variant}
        required={required}
        styled={styled}
        onChange={e => console.log('checkbox', name, ' changed to: ', checked)}
        error={errortext ? 'Please accept our terms and conditions.' : ''}
      />,
      div
    );
    return div;
  });
