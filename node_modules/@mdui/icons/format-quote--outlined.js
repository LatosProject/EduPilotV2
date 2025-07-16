import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatQuote_Outlined = class IconFormatQuote_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"/>');
    }
};
IconFormatQuote_Outlined.styles = style;
IconFormatQuote_Outlined = __decorate([
    customElement('mdui-icon-format-quote--outlined')
], IconFormatQuote_Outlined);
export { IconFormatQuote_Outlined };
