import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowLeft_Rounded = class IconKeyboardArrowLeft_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M14.71 15.88 10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"/>');
    }
};
IconKeyboardArrowLeft_Rounded.styles = style;
IconKeyboardArrowLeft_Rounded = __decorate([
    customElement('mdui-icon-keyboard-arrow-left--rounded')
], IconKeyboardArrowLeft_Rounded);
export { IconKeyboardArrowLeft_Rounded };
