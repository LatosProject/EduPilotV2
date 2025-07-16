import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopWindows = class IconDesktopWindows extends LitElement {
    render() {
        return svgTag('<path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"/>');
    }
};
IconDesktopWindows.styles = style;
IconDesktopWindows = __decorate([
    customElement('mdui-icon-desktop-windows')
], IconDesktopWindows);
export { IconDesktopWindows };
