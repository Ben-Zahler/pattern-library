import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';
const TAG = 'axa-policy-features';
const CLASS = '.m-policy-features';
const defaultWindowHeight = 1000;
const huge2WindowWidth = 992;
const hugeWindowWidth = 768;
const large1WindowWidth = 576;
const DEFAULT_BACKGROUND_RGB = 'rgb(59, 63, 216)';

const $axaPolicyFeaturesHeaderEl = Selector(
  () => document.querySelector(TAG).shadowRoot,
  { dependencies: { TAG } }
).find('h1');

const $axaPolicyFeaturesArticleEl = Selector(
  () => document.querySelector(TAG).shadowRoot,
  { dependencies: { TAG } }
).find('article');

fixture('Policy features - basic functionality').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features`
);

test('should render policy-features', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector(TAG).shadowRoot,
    { dependencies: { TAG } }
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
});

test('should render title', async t => {
  await t
    .expect($axaPolicyFeaturesHeaderEl.textContent)
    .eql('A 5 star car insurance with affordable premium services');
});

test('should render default background (dark-indigo)', async t => {
  await t
    .expect(
      await $axaPolicyFeaturesArticleEl.getStyleProperty('background-color')
    )
    .eql(DEFAULT_BACKGROUND_RGB);
});

test('should render title with correct size on screen lg', async t => {
  await t
    .expect(await $axaPolicyFeaturesHeaderEl.getStyleProperty('font-size'))
    .eql('48px');
}).before(async t => {
  await t.resizeWindow(huge2WindowWidth, defaultWindowHeight);
});

test('should render title with correct size on screen md', async t => {
  await t
    .expect(await $axaPolicyFeaturesHeaderEl.getStyleProperty('font-size'))
    .eql('30px');
}).before(async t => {
  await t.resizeWindow(hugeWindowWidth, defaultWindowHeight);
});

test('should render title with correct size on all other screen sizes', async t => {
  await t
    .expect(await $axaPolicyFeaturesHeaderEl.getStyleProperty('font-size'))
    .eql('24px');
}).before(async t => {
  await t.resizeWindow(large1WindowWidth, defaultWindowHeight);
});

fixture('Policy features - attribute variant: not set').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features&knob-variant=&knob-title=A 5 star car insurance with affordable premium services&knob-Show title?=y&knob-title (of item)=Get Discount&knob-icon=email&knob-icon - load svg icon from this url instead:=&knob-description=A 5 star car insurance with affordable premium services`
);

test('should set default background-color if variant is not set', async t => {
  await t
    .expect(
      await $axaPolicyFeaturesArticleEl.getStyleProperty('background-color')
    )
    .eql(DEFAULT_BACKGROUND_RGB);
});

fixture('Policy features - attribute variant: not in whitelist').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features&knob-variant=thisStyleIsNotInWhitelist&knob-title=A 5 star car insurance with affordable premium services&knob-Show title?=y&knob-title (of item)=Get Discount&knob-icon=email&knob-icon - load svg icon from this url instead:=&knob-description=A 5 star car insurance with affordable premium services`
);

test('should set default style if variant string is not in whitelist', async t => {
  await t
    .expect(
      await $axaPolicyFeaturesArticleEl.getStyleProperty('background-color')
    )
    .eql(DEFAULT_BACKGROUND_RGB)
    .expect(await $axaPolicyFeaturesArticleEl.getAttribute('class'))
    .eql('m-policy-features');
});

fixture('Policy features - attribute variant: is in whitelist').page(
  `${host}/iframe.html?id=molecules-policy-features--policy-features&knob-variant=wild-sand&knob-title=A 5 star car insurance with affordable premium services&knob-Show title?=y&knob-title (of item)=Get Discount&knob-icon=email&knob-icon - load svg icon from this url instead:=&knob-description=A 5 star car insurance with affordable premium services`
);

test('should set style to "wild-sand"', async t => {
  await t
    .expect(await $axaPolicyFeaturesArticleEl.getAttribute('class'))
    .contains('wild-sand');
});
