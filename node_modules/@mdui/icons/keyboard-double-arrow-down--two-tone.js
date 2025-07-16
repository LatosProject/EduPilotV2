import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardDoubleArrowDown_TwoTone = class IconKeyboardDoubleArrowDown_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"/><path d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/>');
    }
};
IconKeyboardDoubleArrowDown_TwoTone.styles = style;
IconKeyboardDoubleArrowDown_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-double-arrow-down--two-tone')
], IconKeyboardDoubleArrowDown_TwoTone);
export { IconKeyboardDoubleArrowDown_TwoTone };
