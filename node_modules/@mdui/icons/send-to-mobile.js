import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSendToMobile = class IconSendToMobile extends LitElement {
    render() {
        return svgTag('<path d="M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1zm5-5-4-4v3h-5v2h5v3l4-4z"/>');
    }
};
IconSendToMobile.styles = style;
IconSendToMobile = __decorate([
    customElement('mdui-icon-send-to-mobile')
], IconSendToMobile);
export { IconSendToMobile };
