/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import './index';
import Readme from './README.md';

const storyAXACommercialHeroBanner = storiesOf(
  'Organisms/Commercial Hero Banner',
  module
);
storyAXACommercialHeroBanner.addDecorator(withNoBorder);
storyAXACommercialHeroBanner.addDecorator(withKnobs);
storyAXACommercialHeroBanner.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACommercialHeroBanner.add('Commercial Hero Banner', () => {
  const variant = radios(
    'Variant',
    {
      light: 'light',
      dark: 'dark',
    },
    'light'
  );

  const src = text(
    'Src',
    'https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg'
  );

  const imagePosition = radios(
    'Position',
    {
      'center center': 'center center',
      'top left': 'top left',
      'top right': 'top right',
      'bottom right': 'bottom right',
      'bottom left': 'bottom left',
    },
    'center center'
  );

  const wrapper = document.createElement('div');
  const template = html`
    <axa-commercial-hero-banner
      variant="${variant}"
      imagesource="${src}"
      imageposition="${imagePosition}"
    >
      <h2 slot="category">This example shows specific picture classes</h2>
      <h1 slot="title">Drive with peace of mind</h1>
      <p slot="content">
        Whether you need to insure your first car or renew your existing car
        insurance, AXA can provide a range of car insurance policies to suit
        your requirements and offer great product benefits at a price you can
        afford
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button-link
        href="https://axa.ch"
        slot="button"
        variant="red"
        size="large"
        >GET A QUOTE</axa-button-link
      > </axa-commercial-hero-banner
    ><br />
    <axa-commercial-hero-banner
      variant="${variant}"
      imagesource="${src}"
      imageposition="${imagePosition}"
    >
      <h2 slot="category">This example shows specific picture classes</h2>
      <h1 slot="title">Drive with peace of mind</h1>
      <p slot="content">
        Whether you need to insure your first car or renew your existing car
        insurance, AXA can provide a range of car insurance policies to suit
        your requirements and offer great product benefits at a price you can
        afford
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button-link
        href="https://axa.ch"
        slot="button"
        variant="red"
        size="large"
        >GET A QUOTE</axa-button-link
      >
    </axa-commercial-hero-banner>
    <axa-commercial-hero-banner
      variant="${variant}"
      imagesource="${src}"
      imageposition="${imagePosition}"
    >
      <h2 slot="category">This example shows specific picture classes</h2>
      <h1 slot="title">Drive with peace of mind</h1>
      <p slot="content">
        Whether you need to insure your first car or renew your existing car
        insurance, AXA can provide a range of car insurance policies to suit
        your requirements and offer great product benefits at a price you can
        afford
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button-link
        href="https://axa.ch"
        slot="button"
        variant="red"
        size="large"
        >GET A QUOTE</axa-button-link
      >
    </axa-commercial-hero-banner>
  `;

  render(template, wrapper);
  return wrapper;
});
