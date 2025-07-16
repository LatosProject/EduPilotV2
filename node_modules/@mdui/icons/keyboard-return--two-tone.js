import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardReturn_TwoTone = class IconKeyboardReturn_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/>');
    }
};
IconKeyboardReturn_TwoTone.styles = style;
IconKeyboardReturn_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-return--two-tone')
], IconKeyboardReturn_TwoTone);
export { IconKeyboardReturn_TwoTone };
