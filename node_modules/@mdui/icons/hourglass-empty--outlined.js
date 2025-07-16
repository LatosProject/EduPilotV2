import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassEmpty_Outlined = class IconHourglassEmpty_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5-4-4V4h8v3.5l-4 4z"/>');
    }
};
IconHourglassEmpty_Outlined.styles = style;
IconHourglassEmpty_Outlined = __decorate([
    customElement('mdui-icon-hourglass-empty--outlined')
], IconHourglassEmpty_Outlined);
export { IconHourglassEmpty_Outlined };
