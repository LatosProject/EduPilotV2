import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardReturn_Outlined = class IconKeyboardReturn_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/>');
    }
};
IconKeyboardReturn_Outlined.styles = style;
IconKeyboardReturn_Outlined = __decorate([
    customElement('mdui-icon-keyboard-return--outlined')
], IconKeyboardReturn_Outlined);
export { IconKeyboardReturn_Outlined };
