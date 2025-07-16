import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignRight_TwoTone = class IconFormatAlignRight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z"/>');
    }
};
IconFormatAlignRight_TwoTone.styles = style;
IconFormatAlignRight_TwoTone = __decorate([
    customElement('mdui-icon-format-align-right--two-tone')
], IconFormatAlignRight_TwoTone);
export { IconFormatAlignRight_TwoTone };
