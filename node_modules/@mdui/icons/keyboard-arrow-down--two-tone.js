import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowDown_TwoTone = class IconKeyboardArrowDown_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>');
    }
};
IconKeyboardArrowDown_TwoTone.styles = style;
IconKeyboardArrowDown_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-arrow-down--two-tone')
], IconKeyboardArrowDown_TwoTone);
export { IconKeyboardArrowDown_TwoTone };
