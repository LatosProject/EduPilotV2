import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNetworkCell_Outlined = class IconNetworkCell_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z"/>');
    }
};
IconNetworkCell_Outlined.styles = style;
IconNetworkCell_Outlined = __decorate([
    customElement('mdui-icon-network-cell--outlined')
], IconNetworkCell_Outlined);
export { IconNetworkCell_Outlined };
