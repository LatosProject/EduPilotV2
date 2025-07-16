import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatItalic_TwoTone = class IconFormatItalic_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z"/>');
    }
};
IconFormatItalic_TwoTone.styles = style;
IconFormatItalic_TwoTone = __decorate([
    customElement('mdui-icon-format-italic--two-tone')
], IconFormatItalic_TwoTone);
export { IconFormatItalic_TwoTone };
