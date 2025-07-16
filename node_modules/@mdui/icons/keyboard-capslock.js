import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardCapslock = class IconKeyboardCapslock extends LitElement {
    render() {
        return svgTag('<path d="M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"/>');
    }
};
IconKeyboardCapslock.styles = style;
IconKeyboardCapslock = __decorate([
    customElement('mdui-icon-keyboard-capslock')
], IconKeyboardCapslock);
export { IconKeyboardCapslock };
