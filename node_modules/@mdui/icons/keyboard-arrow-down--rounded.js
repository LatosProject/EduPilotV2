import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowDown_Rounded = class IconKeyboardArrowDown_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8.12 9.29 12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"/>');
    }
};
IconKeyboardArrowDown_Rounded.styles = style;
IconKeyboardArrowDown_Rounded = __decorate([
    customElement('mdui-icon-keyboard-arrow-down--rounded')
], IconKeyboardArrowDown_Rounded);
export { IconKeyboardArrowDown_Rounded };
