import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNetworkPing_Outlined = class IconNetworkPing_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 14.67 3.41 6.09 2 7.5l8.5 8.5H4v2h16v-2h-6.5l5.15-5.15A2.5 2.5 0 1 0 19.5 6 2.5 2.5 0 0 0 17 8.5c0 .35.07.67.2.97l-5.2 5.2z"/>');
    }
};
IconNetworkPing_Outlined.styles = style;
IconNetworkPing_Outlined = __decorate([
    customElement('mdui-icon-network-ping--outlined')
], IconNetworkPing_Outlined);
export { IconNetworkPing_Outlined };
