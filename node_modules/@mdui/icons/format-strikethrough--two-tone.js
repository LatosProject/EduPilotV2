import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatStrikethrough_TwoTone = class IconFormatStrikethrough_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z"/>');
    }
};
IconFormatStrikethrough_TwoTone.styles = style;
IconFormatStrikethrough_TwoTone = __decorate([
    customElement('mdui-icon-format-strikethrough--two-tone')
], IconFormatStrikethrough_TwoTone);
export { IconFormatStrikethrough_TwoTone };
