/* global document */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import './index';

import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Atoms/Fieldset/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Fieldset - enableresponsivestretch', () => {
    const root = document.createElement('div');

    const template = html`
      <axa-text variant="size-3">
        Resize your browser to a tablet or mobile width to see the effect of
        "enableResponsiveStretch"</axa-text
      >
      <br />
      <axa-text>How old are you?</axa-text>
      <br />
      <axa-fieldset horizontal enableresponsivestretch>
        <axa-radio
          button
          nogap
          name="contract"
          label="18-45"
          value="1"
        ></axa-radio>
        <axa-radio
          button
          nogap
          name="contract"
          label="46-54"
          value="2"
        ></axa-radio>
        <axa-radio
          button
          nogap
          name="contract"
          label="55+"
          value="3"
        ></axa-radio>
      </axa-fieldset>
    `;
    render(template, root);
    return root;
  });
