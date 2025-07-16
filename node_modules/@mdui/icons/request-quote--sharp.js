import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRequestQuote_Sharp = class IconRequestQuote_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm1 10h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9v-5h2V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"/>');
    }
};
IconRequestQuote_Sharp.styles = style;
IconRequestQuote_Sharp = __decorate([
    customElement('mdui-icon-request-quote--sharp')
], IconRequestQuote_Sharp);
export { IconRequestQuote_Sharp };
