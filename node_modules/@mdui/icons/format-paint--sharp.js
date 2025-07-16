import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatPaint_Sharp = class IconFormatPaint_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z"/>');
    }
};
IconFormatPaint_Sharp.styles = style;
IconFormatPaint_Sharp = __decorate([
    customElement('mdui-icon-format-paint--sharp')
], IconFormatPaint_Sharp);
export { IconFormatPaint_Sharp };
