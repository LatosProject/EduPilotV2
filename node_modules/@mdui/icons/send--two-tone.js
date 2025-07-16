import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSend_TwoTone = class IconSend_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z" opacity=".3"/><path d="M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z"/>');
    }
};
IconSend_TwoTone.styles = style;
IconSend_TwoTone = __decorate([
    customElement('mdui-icon-send--two-tone')
], IconSend_TwoTone);
export { IconSend_TwoTone };
