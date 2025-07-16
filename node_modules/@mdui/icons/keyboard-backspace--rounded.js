import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardBackspace_Rounded = class IconKeyboardBackspace_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 11H6.83l2.88-2.88A.996.996 0 1 0 8.3 6.71L3.71 11.3a.996.996 0 0 0 0 1.41L8.3 17.3a.996.996 0 1 0 1.41-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
    }
};
IconKeyboardBackspace_Rounded.styles = style;
IconKeyboardBackspace_Rounded = __decorate([
    customElement('mdui-icon-keyboard-backspace--rounded')
], IconKeyboardBackspace_Rounded);
export { IconKeyboardBackspace_Rounded };
