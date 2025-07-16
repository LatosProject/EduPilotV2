import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowLeft_TwoTone = class IconKeyboardArrowLeft_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>');
    }
};
IconKeyboardArrowLeft_TwoTone.styles = style;
IconKeyboardArrowLeft_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-arrow-left--two-tone')
], IconKeyboardArrowLeft_TwoTone);
export { IconKeyboardArrowLeft_TwoTone };
