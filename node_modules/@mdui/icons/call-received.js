import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallReceived = class IconCallReceived extends LitElement {
    render() {
        return svgTag('<path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>');
    }
};
IconCallReceived.styles = style;
IconCallReceived = __decorate([
    customElement('mdui-icon-call-received')
], IconCallReceived);
export { IconCallReceived };
