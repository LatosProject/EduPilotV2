import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopMac = class IconDesktopMac extends LitElement {
    render() {
        return svgTag('<path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h6l-2 2v1h8v-1l-2-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"/>');
    }
};
IconDesktopMac.styles = style;
IconDesktopMac = __decorate([
    customElement('mdui-icon-desktop-mac')
], IconDesktopMac);
export { IconDesktopMac };
