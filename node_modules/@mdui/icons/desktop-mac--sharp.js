import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopMac_Sharp = class IconDesktopMac_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 2H1v16h9l-2 3v1h8v-1l-2-3h9V2zm-2 12H3V4h18v10z"/>');
    }
};
IconDesktopMac_Sharp.styles = style;
IconDesktopMac_Sharp = __decorate([
    customElement('mdui-icon-desktop-mac--sharp')
], IconDesktopMac_Sharp);
export { IconDesktopMac_Sharp };
