import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatIndentIncrease_TwoTone = class IconFormatIndentIncrease_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18v2H3zM3 3h18v2H3zm8 4h10v2H11zM3 8v8l4-4zm8 3h10v2H11zm0 4h10v2H11z"/>');
    }
};
IconFormatIndentIncrease_TwoTone.styles = style;
IconFormatIndentIncrease_TwoTone = __decorate([
    customElement('mdui-icon-format-indent-increase--two-tone')
], IconFormatIndentIncrease_TwoTone);
export { IconFormatIndentIncrease_TwoTone };
