import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatQuote_Sharp = class IconFormatQuote_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z"/>');
    }
};
IconFormatQuote_Sharp.styles = style;
IconFormatQuote_Sharp = __decorate([
    customElement('mdui-icon-format-quote--sharp')
], IconFormatQuote_Sharp);
export { IconFormatQuote_Sharp };
