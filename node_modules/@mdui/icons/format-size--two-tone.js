import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatSize_TwoTone = class IconFormatSize_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z"/>');
    }
};
IconFormatSize_TwoTone.styles = style;
IconFormatSize_TwoTone = __decorate([
    customElement('mdui-icon-format-size--two-tone')
], IconFormatSize_TwoTone);
export { IconFormatSize_TwoTone };
