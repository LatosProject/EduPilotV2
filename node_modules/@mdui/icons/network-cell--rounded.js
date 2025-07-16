import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNetworkCell_Rounded = class IconNetworkCell_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71zM20 20h-3V9.83l3-3V20z"/>');
    }
};
IconNetworkCell_Rounded.styles = style;
IconNetworkCell_Rounded = __decorate([
    customElement('mdui-icon-network-cell--rounded')
], IconNetworkCell_Rounded);
export { IconNetworkCell_Rounded };
