import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatLineSpacing_TwoTone = class IconFormatLineSpacing_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 5h12v2H10zm0 12h12v2H10zm-8.5 0L5 20.5 8.5 17H6V7h2.5L5 3.5 1.5 7H4v10zm8.5-6h12v2H10z"/>');
    }
};
IconFormatLineSpacing_TwoTone.styles = style;
IconFormatLineSpacing_TwoTone = __decorate([
    customElement('mdui-icon-format-line-spacing--two-tone')
], IconFormatLineSpacing_TwoTone);
export { IconFormatLineSpacing_TwoTone };
