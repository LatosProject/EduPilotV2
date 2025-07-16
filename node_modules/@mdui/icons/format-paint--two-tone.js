import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatPaint_TwoTone = class IconFormatPaint_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 4h10v2H6z" opacity=".3"/><path d="M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1zm-1 4H6V4h10v2z"/>');
    }
};
IconFormatPaint_TwoTone.styles = style;
IconFormatPaint_TwoTone = __decorate([
    customElement('mdui-icon-format-paint--two-tone')
], IconFormatPaint_TwoTone);
export { IconFormatPaint_TwoTone };
