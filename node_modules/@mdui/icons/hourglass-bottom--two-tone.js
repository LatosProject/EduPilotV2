import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassBottom_TwoTone = class IconHourglassBottom_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m16 16.5-4-4-4 4V20h8z" opacity=".3"/><path d="m16 16.5-4-4-4 4V20h8z" opacity=".3"/><path d="M6 22h12v-6l-4-4 3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99V22zM8 7.5V4h8v3.5l-4 4-4-4zm0 9 4-4 4 4V20H8v-3.5z"/>');
    }
};
IconHourglassBottom_TwoTone.styles = style;
IconHourglassBottom_TwoTone = __decorate([
    customElement('mdui-icon-hourglass-bottom--two-tone')
], IconHourglassBottom_TwoTone);
export { IconHourglassBottom_TwoTone };
