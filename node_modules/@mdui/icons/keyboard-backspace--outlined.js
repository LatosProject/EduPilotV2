import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardBackspace_Outlined = class IconKeyboardBackspace_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>');
    }
};
IconKeyboardBackspace_Outlined.styles = style;
IconKeyboardBackspace_Outlined = __decorate([
    customElement('mdui-icon-keyboard-backspace--outlined')
], IconKeyboardBackspace_Outlined);
export { IconKeyboardBackspace_Outlined };
