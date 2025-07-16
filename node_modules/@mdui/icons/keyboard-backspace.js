import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardBackspace = class IconKeyboardBackspace extends LitElement {
    render() {
        return svgTag('<path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>');
    }
};
IconKeyboardBackspace.styles = style;
IconKeyboardBackspace = __decorate([
    customElement('mdui-icon-keyboard-backspace')
], IconKeyboardBackspace);
export { IconKeyboardBackspace };
