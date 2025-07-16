import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignCenter = class IconFormatAlignCenter extends LitElement {
    render() {
        return svgTag('<path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>');
    }
};
IconFormatAlignCenter.styles = style;
IconFormatAlignCenter = __decorate([
    customElement('mdui-icon-format-align-center')
], IconFormatAlignCenter);
export { IconFormatAlignCenter };
