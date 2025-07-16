import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardControlKey_Rounded = class IconKeyboardControlKey_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M5.71 12.71c.39.39 1.02.39 1.41 0L12 7.83l4.88 4.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L5.7 11.3c-.38.38-.38 1.02.01 1.41z"/>');
    }
};
IconKeyboardControlKey_Rounded.styles = style;
IconKeyboardControlKey_Rounded = __decorate([
    customElement('mdui-icon-keyboard-control-key--rounded')
], IconKeyboardControlKey_Rounded);
export { IconKeyboardControlKey_Rounded };
