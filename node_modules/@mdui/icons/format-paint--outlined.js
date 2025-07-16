import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatPaint_Outlined = class IconFormatPaint_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/>');
    }
};
IconFormatPaint_Outlined.styles = style;
IconFormatPaint_Outlined = __decorate([
    customElement('mdui-icon-format-paint--outlined')
], IconFormatPaint_Outlined);
export { IconFormatPaint_Outlined };
