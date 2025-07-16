import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPinInvoke_Outlined = class IconPinInvoke_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6h2zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM9.34 12h2.24l-2.95 2.95 1.41 1.41L13 13.42v2.24h2V10H9.34v2z"/>');
    }
};
IconPinInvoke_Outlined.styles = style;
IconPinInvoke_Outlined = __decorate([
    customElement('mdui-icon-pin-invoke--outlined')
], IconPinInvoke_Outlined);
export { IconPinInvoke_Outlined };
