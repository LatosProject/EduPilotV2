import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignLeft_TwoTone = class IconFormatAlignLeft_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z"/>');
    }
};
IconFormatAlignLeft_TwoTone.styles = style;
IconFormatAlignLeft_TwoTone = __decorate([
    customElement('mdui-icon-format-align-left--two-tone')
], IconFormatAlignLeft_TwoTone);
export { IconFormatAlignLeft_TwoTone };
