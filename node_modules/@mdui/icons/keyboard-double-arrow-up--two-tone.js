import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardDoubleArrowUp_TwoTone = class IconKeyboardDoubleArrowUp_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"/><path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>');
    }
};
IconKeyboardDoubleArrowUp_TwoTone.styles = style;
IconKeyboardDoubleArrowUp_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-double-arrow-up--two-tone')
], IconKeyboardDoubleArrowUp_TwoTone);
export { IconKeyboardDoubleArrowUp_TwoTone };
