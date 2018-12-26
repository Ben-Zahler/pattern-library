import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';

const DEFAULTS = {
  selectClass: 'js-dropdown__content',
  containerClass: '.js-dropdown',
  toggleClass: 'js-dropdown__toggle',
  nativeSelectClass: 'js-dropdown__native-select',
  isOpenClass: 'is-dropdown-open',
  isAnimatingClass: 'is-dropdown-animating',
}

class DropDown {
  constructor(wcNode) {
    // eslint-disable-next-line no-param-reassign
    this.wcNode = wcNode;
    this.isOpen = false;
    this.offDropdownClick = on(this.wcNode, EVENTS.CLICK, DEFAULTS.toggleClass, this.handleDropdownClick, { capture: true, passive: false });
    this.offDropdownValueClick= on(this.wcNode, EVENTS.CLICK, DEFAULTS.selectClass, this.handleDropdownValueClick, { capture: true, passive: false });
    // this.unInputEnd = on(this.wcNode, EVENTS.CHANGE, this.options.nativeSelectClass, this.handleChange, { capture: true, passive: false });
  }

  // onInteractive() {
  //   this.offInteractive();
  //   this.unTransitionEnd = on(this.wcNode, 'transitionend', this.handleTransitionEnd);
  // }

  // offInteractive() {
  //   if (this.unTransitionEnd) {
  //     this.unTransitionEnd();
  //   }
  // }

  // enter(node) {
  //   const { parentNode } = node;
  //   const { lastElementChild } = parentNode;

  //   if (this.isOpen) {
  //     return;
  //   }
  //   this.isOpen = true;

  //   add(parentNode, this.options.isAnimatingClass);

  //   lastElementChild.style.overflow = 'scroll';
  //   const { scrollHeight } = lastElementChild;
  //   lastElementChild.style.overflow = '';

  //   this.onInteractive();
  //   this.onClicks();

  //   lastElementChild.style.height = `${scrollHeight}px`;

  //   add(parentNode, this.options.isOpenClass);
  // }

  // leave(node) {
  //   const { parentNode } = node;
  //   const { lastElementChild } = parentNode;
  //   const { scrollHeight } = lastElementChild;

  //   if (!this.isOpen) {
  //     return;
  //   }
  //   this.isOpen = false;

  //   this.onInteractive();
  //   this.onClicks();

  //   add(parentNode, this.options.isAnimatingClass);

  //   requestAnimationFrame(() => {
  //     lastElementChild.style.height = `${scrollHeight}px`;

  //     requestAnimationFrame(() => {
  //       remove(parentNode, this.options.isOpenClass);
  //       lastElementChild.style.height = 0;
  //     });
  //   });
  // }

  // _removeHeightOnElement(node) {
  //   if (this.isOpen) {
  //     node.style.height = '';
  //   }
  // }

  // handleTransitionEnd = (e) => {
  //   if (e.propertyName === 'height') {
  //     this._removeHeightOnElement(e.target);

  //     this.offInteractive();

  //     remove(this.wcNode, this.options.isAnimatingClass);
  //   }
  // }

  handleDropdownClick = (e) => {
    e.preventDefault();
    this.toggleDropdown();
  }

  toggleDropdown() {
    if (!this.isOpen) {
      this.wcNode.classList.add(DEFAULTS.isOpenClass);
      this.isOpen = true;
    } else {
      this.wcNode.classList.remove(DEFAULTS.isOpenClass);
      this.isOpen = false;
    }
  }

  handleDropdownValueClick = (e) => {
    e.preventDefault();
    fire(this.wcNode, AXA_EVENTS.AXA_CHANGE, {...e.target.dataset}, { bubbles: true, cancelable: true });
    this.toggleDropdown();
    // this.wcNode.setAttribute('value', e.target.value);
  }

  // reset() {
  //   const node = this.wcNode.querySelector(this.options.containerClass);

  //   if (node) {
  //     const { lastElementChild } = node;

  //     lastElementChild.style.height = '';
  //     remove(node, this.options.isOpenClass);
  //   }
  // }

  // destroy() {
  //   super.destroy();

  //   this.reset();

  //   delete this.wcNode;
  //   delete this.options;
  // }
}

export default DropDown;
