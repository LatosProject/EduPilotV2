import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatPaint_Rounded = class IconFormatPaint_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4h-9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h7c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2z"/>');
    }
};
IconFormatPaint_Rounded.styles = style;
IconFormatPaint_Rounded = __decorate([
    customElement('mdui-icon-format-paint--rounded')
], IconFormatPaint_Rounded);
export { IconFormatPaint_Rounded };
