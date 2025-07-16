import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowUp_Rounded = class IconKeyboardArrowUp_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8.12 14.71 12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"/>');
    }
};
IconKeyboardArrowUp_Rounded.styles = style;
IconKeyboardArrowUp_Rounded = __decorate([
    customElement('mdui-icon-keyboard-arrow-up--rounded')
], IconKeyboardArrowUp_Rounded);
export { IconKeyboardArrowUp_Rounded };
