import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardTab_TwoTone = class IconKeyboardTab_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/>');
    }
};
IconKeyboardTab_TwoTone.styles = style;
IconKeyboardTab_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-tab--two-tone')
], IconKeyboardTab_TwoTone);
export { IconKeyboardTab_TwoTone };
