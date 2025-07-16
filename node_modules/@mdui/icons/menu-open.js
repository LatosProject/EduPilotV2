import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMenuOpen = class IconMenuOpen extends LitElement {
    render() {
        return svgTag('<path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/>');
    }
};
IconMenuOpen.styles = style;
IconMenuOpen = __decorate([
    customElement('mdui-icon-menu-open')
], IconMenuOpen);
export { IconMenuOpen };
