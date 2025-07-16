import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopMac_TwoTone = class IconDesktopMac_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 4h18v10H3z" opacity=".3"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>');
    }
};
IconDesktopMac_TwoTone.styles = style;
IconDesktopMac_TwoTone = __decorate([
    customElement('mdui-icon-desktop-mac--two-tone')
], IconDesktopMac_TwoTone);
export { IconDesktopMac_TwoTone };
