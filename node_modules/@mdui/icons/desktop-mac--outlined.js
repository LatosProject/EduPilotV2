import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopMac_Outlined = class IconDesktopMac_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>');
    }
};
IconDesktopMac_Outlined.styles = style;
IconDesktopMac_Outlined = __decorate([
    customElement('mdui-icon-desktop-mac--outlined')
], IconDesktopMac_Outlined);
export { IconDesktopMac_Outlined };
