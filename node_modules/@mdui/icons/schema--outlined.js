import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSchema_Outlined = class IconSchema_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7zM6 3h3v2H6V3zm3 18H6v-2h3v2zm0-8H6v-2h3v2zm10 0h-3v-2h3v2z"/>');
    }
};
IconSchema_Outlined.styles = style;
IconSchema_Outlined = __decorate([
    customElement('mdui-icon-schema--outlined')
], IconSchema_Outlined);
export { IconSchema_Outlined };
