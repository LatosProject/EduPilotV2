import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatLineSpacing_Sharp = class IconFormatLineSpacing_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"/>');
    }
};
IconFormatLineSpacing_Sharp.styles = style;
IconFormatLineSpacing_Sharp = __decorate([
    customElement('mdui-icon-format-line-spacing--sharp')
], IconFormatLineSpacing_Sharp);
export { IconFormatLineSpacing_Sharp };
