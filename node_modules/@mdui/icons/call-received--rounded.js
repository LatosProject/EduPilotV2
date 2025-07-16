import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallReceived_Rounded = class IconCallReceived_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19.3 4.71a.996.996 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4z"/>');
    }
};
IconCallReceived_Rounded.styles = style;
IconCallReceived_Rounded = __decorate([
    customElement('mdui-icon-call-received--rounded')
], IconCallReceived_Rounded);
export { IconCallReceived_Rounded };
