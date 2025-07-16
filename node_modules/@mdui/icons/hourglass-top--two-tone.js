import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassTop_TwoTone = class IconHourglassTop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m8 7.5 4 4 4-4V4H8z" opacity=".3"/><path d="m8 7.5 4 4 4-4V4H8z" opacity=".3"/><path d="M18 2H6v6l4 4-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z"/>');
    }
};
IconHourglassTop_TwoTone.styles = style;
IconHourglassTop_TwoTone = __decorate([
    customElement('mdui-icon-hourglass-top--two-tone')
], IconHourglassTop_TwoTone);
export { IconHourglassTop_TwoTone };
