import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopWindows_Outlined = class IconDesktopWindows_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>');
    }
};
IconDesktopWindows_Outlined.styles = style;
IconDesktopWindows_Outlined = __decorate([
    customElement('mdui-icon-desktop-windows--outlined')
], IconDesktopWindows_Outlined);
export { IconDesktopWindows_Outlined };
