import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLan = class IconLan extends LitElement {
    render() {
        return svgTag('<path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3z"/>');
    }
};
IconLan.styles = style;
IconLan = __decorate([
    customElement('mdui-icon-lan')
], IconLan);
export { IconLan };
