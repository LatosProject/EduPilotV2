import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardDoubleArrowRight = class IconKeyboardDoubleArrowRight extends LitElement {
    render() {
        return svgTag('<path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>');
    }
};
IconKeyboardDoubleArrowRight.styles = style;
IconKeyboardDoubleArrowRight = __decorate([
    customElement('mdui-icon-keyboard-double-arrow-right')
], IconKeyboardDoubleArrowRight);
export { IconKeyboardDoubleArrowRight };
