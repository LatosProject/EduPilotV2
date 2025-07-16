import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignCenter_TwoTone = class IconFormatAlignCenter_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3zm4 12h10v2H7zm0-8h10v2H7zm-4 4h18v2H3zm0 8h18v2H3z"/>');
    }
};
IconFormatAlignCenter_TwoTone.styles = style;
IconFormatAlignCenter_TwoTone = __decorate([
    customElement('mdui-icon-format-align-center--two-tone')
], IconFormatAlignCenter_TwoTone);
export { IconFormatAlignCenter_TwoTone };
