import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatQuote = class IconFormatQuote extends LitElement {
    render() {
        return svgTag('<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>');
    }
};
IconFormatQuote.styles = style;
IconFormatQuote = __decorate([
    customElement('mdui-icon-format-quote')
], IconFormatQuote);
export { IconFormatQuote };
