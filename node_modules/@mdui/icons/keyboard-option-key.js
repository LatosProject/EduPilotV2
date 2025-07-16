import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardOptionKey = class IconKeyboardOptionKey extends LitElement {
    render() {
        return svgTag('<path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"/>');
    }
};
IconKeyboardOptionKey.styles = style;
IconKeyboardOptionKey = __decorate([
    customElement('mdui-icon-keyboard-option-key')
], IconKeyboardOptionKey);
export { IconKeyboardOptionKey };
