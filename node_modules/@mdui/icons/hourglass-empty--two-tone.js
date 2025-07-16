import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassEmpty_TwoTone = class IconHourglassEmpty_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z"/>');
    }
};
IconHourglassEmpty_TwoTone.styles = style;
IconHourglassEmpty_TwoTone = __decorate([
    customElement('mdui-icon-hourglass-empty--two-tone')
], IconHourglassEmpty_TwoTone);
export { IconHourglassEmpty_TwoTone };
