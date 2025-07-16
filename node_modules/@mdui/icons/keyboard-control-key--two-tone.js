import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardControlKey_TwoTone = class IconKeyboardControlKey_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>');
    }
};
IconKeyboardControlKey_TwoTone.styles = style;
IconKeyboardControlKey_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-control-key--two-tone')
], IconKeyboardControlKey_TwoTone);
export { IconKeyboardControlKey_TwoTone };
