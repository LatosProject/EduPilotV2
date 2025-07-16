import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatIndentDecrease_Outlined = class IconFormatIndentDecrease_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 17h10v-2H11v2zm-8-5 4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>');
    }
};
IconFormatIndentDecrease_Outlined.styles = style;
IconFormatIndentDecrease_Outlined = __decorate([
    customElement('mdui-icon-format-indent-decrease--outlined')
], IconFormatIndentDecrease_Outlined);
export { IconFormatIndentDecrease_Outlined };
