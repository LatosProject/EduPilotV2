import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLan_Sharp = class IconLan_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3z"/>');
    }
};
IconLan_Sharp.styles = style;
IconLan_Sharp = __decorate([
    customElement('mdui-icon-lan--sharp')
], IconLan_Sharp);
export { IconLan_Sharp };
