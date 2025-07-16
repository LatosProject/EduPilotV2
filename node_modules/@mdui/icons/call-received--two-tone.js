import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallReceived_TwoTone = class IconCallReceived_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>');
    }
};
IconCallReceived_TwoTone.styles = style;
IconCallReceived_TwoTone = __decorate([
    customElement('mdui-icon-call-received--two-tone')
], IconCallReceived_TwoTone);
export { IconCallReceived_TwoTone };
