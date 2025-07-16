import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallReceived_Sharp = class IconCallReceived_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"/>');
    }
};
IconCallReceived_Sharp.styles = style;
IconCallReceived_Sharp = __decorate([
    customElement('mdui-icon-call-received--sharp')
], IconCallReceived_Sharp);
export { IconCallReceived_Sharp };
