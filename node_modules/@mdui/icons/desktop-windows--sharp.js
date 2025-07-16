import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopWindows_Sharp = class IconDesktopWindows_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 2H1v16h9v2H8v2h8v-2h-2v-2h9V2zm-2 14H3V4h18v12z"/>');
    }
};
IconDesktopWindows_Sharp.styles = style;
IconDesktopWindows_Sharp = __decorate([
    customElement('mdui-icon-desktop-windows--sharp')
], IconDesktopWindows_Sharp);
export { IconDesktopWindows_Sharp };
