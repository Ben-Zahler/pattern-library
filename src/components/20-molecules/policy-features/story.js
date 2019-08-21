/* global document */
import { storiesOf } from '@storybook/html';
import { radios, select, text, withKnobs } from '@storybook/addon-knobs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmailSvg } from '@axa-ch/materials/icons';
import { html, render, svg } from 'lit-html';
import { STYLE_WHITELIST } from './index';
import Readme from './README.md';
import withNoBorder from '../../../../.storybook/addons/no-border';

const story = storiesOf('Molecules/Policy features', module);
story.addDecorator(withKnobs);
story.addDecorator(withNoBorder);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('Policy features', () => {
  const variants = select(
    'variant',
    STYLE_WHITELIST.concat('thisStyleIsNotInWhitelist', ''),
    '',
    'axa-policy-features'
  );
  const title = text(
    'title',
    'A 5 star car insurance with affordable premium services',
    'axa-policy-features'
  );

  // props of axa-policy-features-item
  const itemTitleRadio = radios(
    'Show title?',
    { yes: 'y', no: 'n' },
    'y',
    'axa-policy-features-item'
  );
  const itemTitle = text(
    'title (of item)',
    'Get Discount',
    'axa-policy-features-item'
  );
  const itemIconUrl = text(
    'icon - load svg icon from this url instead:',
    '',
    'axa-policy-features-item'
  );
  const itemDescription = text(
    'description',
    'A 5 star car insurance with affordable premium services',
    'axa-policy-features-item'
  );

  const wrapper = document.createElement('div');
  const template = html`
    <axa-policy-features title="${title}" variant="${variants}">
      <axa-policy-features-item
        title="${itemTitleRadio === 'y' ? itemTitle : ''}"
        iconurl="${itemIconUrl}"
        description="${itemDescription}"
      >
        ${svg([EmailSvg])}
      </axa-policy-features-item>
      <axa-policy-features-item
        title="24/7 assistance"
        description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online. This is a long text."
      >
        ${svg([EmailSvg])}
      </axa-policy-features-item>
      <axa-policy-features-item
        title="Discount partners"
        description="This SVG is loaded externally."
      >
        ${svg([EmailSvg])}
      </axa-policy-features-item>
      <axa-policy-features-item
        title="Online & Apps"
        description="We reward safe drivers : 75% no claims discount + an extra 10% off if you get a quote online"
      >
        ${svg([EmailSvg])}
      </axa-policy-features-item>
    </axa-policy-features>
  `;

  render(template, wrapper);
  return wrapper;
});
