import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardControlKey = class IconKeyboardControlKey extends LitElement {
    render() {
        return svgTag('<path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>');
    }
};
IconKeyboardControlKey.styles = style;
IconKeyboardControlKey = __decorate([
    customElement('mdui-icon-keyboard-control-key')
], IconKeyboardControlKey);
export { IconKeyboardControlKey };
