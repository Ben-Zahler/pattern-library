import { Selector } from 'testcafe';

const host = process.env.TEST_HOST_STORYBOOK_URL || 'http://localhost:9999';

fixture('Table - basic functionality').page(
  `${host}/iframe.html?id=organisms-table--table-default`
);

const TAG = 'axa-table';
const CLASS = '.o-table';

test('should render table', async t => {
  const $el = await Selector(TAG);
  await t.expect($el.exists).ok();
  const $elEl = await $el.find(CLASS);
  await t.expect($elEl.exists).ok();
});

test('should render default table on mobile', async t => {
  await t.resizeWindow(300, 1000);
  const $el = await Selector('axa-table th');
  await t.expect(await $el.getStyleProperty('display')).eql('none');
});

fixture('Table - innerscroll functionality').page(
  `${host}/iframe.html?id=organisms-table--table-innerscroll`
);

test('should render innerscroll table on mobile', async t => {
  await t.resizeWindow(300, 1000);
  const $el = await Selector('axa-table');
  const $elChild = await Selector('.o-table');
  const $elTh = await Selector('axa-table th');
  await t.expect(await $elTh.getStyleProperty('display')).eql('table-cell');
  await t.expect(await $el.getStyleProperty('overflow-x')).eql('auto');
  const innerscroll = parseInt(await $el.getAttribute('innerscroll'), 10);
  await t
    .expect(parseInt(await $elChild.getStyleProperty('width'), 10))
    .within(innerscroll - 1, innerscroll + 1);

  await t
    .expect(parseInt(await $el.getStyleProperty('width'), 10))
    .within(250, 305);
});
