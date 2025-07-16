import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSendToMobile_Sharp = class IconSendToMobile_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2z"/><path d="m22 12-4-4v3h-5v2h5v3z"/>');
    }
};
IconSendToMobile_Sharp.styles = style;
IconSendToMobile_Sharp = __decorate([
    customElement('mdui-icon-send-to-mobile--sharp')
], IconSendToMobile_Sharp);
export { IconSendToMobile_Sharp };
