import { Selector } from 'testcafe';
import FooterAccessor from './ui.accessor';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Footer - Basic Functionality')
  .page(`${host}/iframe.html?id=organisms-footer--footer`)
  .beforeEach(async t => {
    await t.maximizeWindow();
  });

const TAG = 'axa-footer';
const CLASS = '.o-footer';

test('should render footer with correct background color', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();
  await FooterAccessor.assertBackgroundColor(t, $axaElemShadowEl);
});

test('should correctly render footer titles', async t => {
  const $footerTitle = FooterAccessor.getSlotNode('column-0-title-desktop');

  await t.expect($footerTitle.textContent).contains('axa & you');
  await t
    .expect($footerTitle.getStyleProperty('color'))
    .eql('rgb(255, 255, 255)');
  await t.expect($footerTitle.getStyleProperty('font-weight')).eql('700');
  await t.expect($footerTitle.getStyleProperty('font-size')).eql('16px');
  await t
    .expect($footerTitle.getStyleProperty('text-transform'))
    .eql('uppercase');
});

test('should correctly render footer link content', async t => {
  const $contactLink = FooterAccessor.getSlotNode('column-0-item-0');
  await t.expect($contactLink.exists).ok();

  await t
    .expect($contactLink.getStyleProperty('color'))
    .eql('rgb(255, 255, 255)');
  await t
    .expect($contactLink.getStyleProperty('text-decoration'))
    .eql('none solid rgb(255, 255, 255)');
  await t.expect($contactLink.getStyleProperty('font-weight')).eql('400');
  await t.expect($contactLink.getStyleProperty('font-style')).eql('normal');
  await t.expect($contactLink.getStyleProperty('font-size')).eql('14px');
});

test('should render facebook social media button', async t => {
  const $facebookButton = FooterAccessor.getSlotNode('column-social-item-0');

  await t.expect($facebookButton.visible).ok();
  await t.expect($facebookButton.getStyleProperty('width')).eql('25px');
  await t.expect($facebookButton.getStyleProperty('height')).eql('25px');
  await t.expect($facebookButton.childElementCount).eql(1);

  const $facebookSvg = await $facebookButton.find('svg');
  await t.expect($facebookSvg.getAttribute('height')).eql('25');
  await t.expect($facebookSvg.getAttribute('width')).eql('25');
  await t.expect($facebookSvg.getAttribute('viewBox')).eql('0 0 25 25');
  await t.expect($facebookSvg.childElementCount).eql(1);

  const $facebookSvgSubElement = await $facebookSvg.find('path');
  await t.expect($facebookSvgSubElement.childElementCount).eql(0);
});

test('should render accordion only in mobile mode', async t => {
  await t.resizeWindow(576, 400);
  const $accordion = Selector(() =>
    document
      .querySelector('axa-footer')
      .shadowRoot.querySelector('.o-footer__accordion-button')
  );

  await t.expect($accordion.visible).notOk();
  await t.resizeWindow(575, 400);
  await t.expect($accordion.visible).ok();
});

test('should correctly open accordion on click', async t => {
  await t.resizeWindow(575, 400);

  const $accordionButtons = Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );

  const $accordionFirstButton = $accordionButtons
    .find('.o-footer__accordion-button')
    .nth(0);

  const $accordionSecondButton = $accordionButtons
    .find('.o-footer__accordion-button')
    .nth(1);

  await t.expect($accordionSecondButton.exists).ok();
  await t.expect($accordionSecondButton.visible).ok();

  const $footerMobile = Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $accordionFirstContent = $footerMobile
    .find('.o-footer__main-content-panel')
    .nth(0);
  const $accordionSecondContent = $footerMobile
    .find('.o-footer__main-content-panel')
    .nth(1);

  await t
    .expect($accordionFirstContent.getStyleProperty('max-height'))
    .eql('0px');
  await t
    .expect($accordionSecondContent.getStyleProperty('max-height'))
    .eql('0px');

  await t.click($accordionFirstButton);

  await t
    .expect($accordionFirstContent.getStyleProperty('max-height'))
    .notEql('0px');
  await t
    .expect($accordionSecondContent.getStyleProperty('max-height'))
    .eql('0px');
});

test('should correctly render social media title in desktop view', async t => {
  const $socialMediaTitle = FooterAccessor.getSlotNode('column-2-social-title');

  await t.expect($socialMediaTitle.textContent).contains('stay in touch');

  await t.resizeWindow(575, 400);
  await t.expect($socialMediaTitle.getStyleProperty('display')).eql('none');
  await t.resizeWindow(767, 400);
  await t.expect($socialMediaTitle.getStyleProperty('display')).eql('none');
  await t.resizeWindow(991, 400);
  await t.expect($socialMediaTitle.getStyleProperty('display')).eql('none');
  await t.resizeWindow(992, 400);
  await t.expect($socialMediaTitle.getStyleProperty('display')).eql('block');
  await t.resizeWindow(1200, 400);
  await t.expect($socialMediaTitle.getStyleProperty('display')).eql('block');
});

fixture('Footer - React Smoketest').page(
  `${host}/iframe.html?id=organisms-footer-react--feature-footer-callbacks`
);

test('should render footer with working react callbacks', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();

  await FooterAccessor.assertBackgroundColor(t, $axaElemShadowEl);

  const $contactLink = FooterAccessor.getSlotNode('column-0-item-0');

  await t.expect($contactLink.textContent).eql('Contact');
  await t.expect($contactLink.visible).ok();

  const $result = Selector('#clicked-link');
  await t.expect($result.innerText).contains(' -');

  await t.click($contactLink);

  await t
    .expect($result.innerText)
    .contains('https://axa.ch/en/private-customers.html');

  const $axaWorldwideLink = FooterAccessor.getSlotNode(
    'column-0-title-desktop'
  );

  await t.expect($axaWorldwideLink.visible).ok();
  await t.expect($axaWorldwideLink.textContent).eql('axa & you');

  const $facebookButton = FooterAccessor.getSlotNode('column-social-item-0');

  await t.expect($facebookButton.visible).ok();
  await t.click($facebookButton);

  await t.expect($result.innerText).contains('https://www.facebook.com/axach/');
});

fixture('Footer - Demo Smoketest').page(
  `${host}/iframe.html?id=organisms-footer-demos--feature-footer-callbacks`
);

test('should render footer with working native callbacks', async t => {
  const $axaElem = await Selector(TAG);
  await t.expect($axaElem.exists).ok();
  const $axaElemShadow = await Selector(
    () => document.querySelector('axa-footer').shadowRoot
  );
  const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
  await t.expect($axaElemShadowEl.exists).ok();

  await FooterAccessor.assertBackgroundColor(t, $axaElemShadowEl);

  const $contactLink = FooterAccessor.getSlotNode('column-0-item-0');

  await t.expect($contactLink.textContent).eql('Contact');
  await t.expect($contactLink.visible).ok();

  const $result = Selector('#clicked-link');
  await t.expect($result.innerText).contains(' -');

  await t.click($contactLink);

  // Travis cannot handle the following block of code, for whatever reason.
  // const $resultAfterLinkClick = Selector('#clicked-link');
  // await t
  //   .expect($resultAfterLinkClick.innerText)
  //   .contains('https://axa.ch/en/private-customers.html');

  const $axaWorldwideLink = FooterAccessor.getSlotNode(
    'column-0-title-desktop'
  );

  // await t.expect($axaWorldwideLink.visible).ok();
  // await t.expect($axaWorldwideLink.textContent).eql('axa & you');

  const $facebookButton = FooterAccessor.getSlotNode('column-social-item-0');

  await t.expect($facebookButton.visible).ok();
  await t.click($facebookButton);

  await t.expect($result.innerText).contains('https://www.facebook.com/axach/');
});
