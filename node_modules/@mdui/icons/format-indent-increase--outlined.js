import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatIndentIncrease_Outlined = class IconFormatIndentIncrease_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>');
    }
};
IconFormatIndentIncrease_Outlined.styles = style;
IconFormatIndentIncrease_Outlined = __decorate([
    customElement('mdui-icon-format-indent-increase--outlined')
], IconFormatIndentIncrease_Outlined);
export { IconFormatIndentIncrease_Outlined };
