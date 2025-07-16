import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatItalic = class IconFormatItalic extends LitElement {
    render() {
        return svgTag('<path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>');
    }
};
IconFormatItalic.styles = style;
IconFormatItalic = __decorate([
    customElement('mdui-icon-format-italic')
], IconFormatItalic);
export { IconFormatItalic };
