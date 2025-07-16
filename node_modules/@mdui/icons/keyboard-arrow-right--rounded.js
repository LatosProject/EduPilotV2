import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowRight_Rounded = class IconKeyboardArrowRight_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9.29 15.88 13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"/>');
    }
};
IconKeyboardArrowRight_Rounded.styles = style;
IconKeyboardArrowRight_Rounded = __decorate([
    customElement('mdui-icon-keyboard-arrow-right--rounded')
], IconKeyboardArrowRight_Rounded);
export { IconKeyboardArrowRight_Rounded };
