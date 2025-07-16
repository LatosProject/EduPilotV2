import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignRight = class IconFormatAlignRight extends LitElement {
    render() {
        return svgTag('<path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>');
    }
};
IconFormatAlignRight.styles = style;
IconFormatAlignRight = __decorate([
    customElement('mdui-icon-format-align-right')
], IconFormatAlignRight);
export { IconFormatAlignRight };
