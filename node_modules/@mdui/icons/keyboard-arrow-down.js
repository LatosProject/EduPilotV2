import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowDown = class IconKeyboardArrowDown extends LitElement {
    render() {
        return svgTag('<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>');
    }
};
IconKeyboardArrowDown.styles = style;
IconKeyboardArrowDown = __decorate([
    customElement('mdui-icon-keyboard-arrow-down')
], IconKeyboardArrowDown);
export { IconKeyboardArrowDown };
