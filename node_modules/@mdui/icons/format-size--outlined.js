import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatSize_Outlined = class IconFormatSize_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>');
    }
};
IconFormatSize_Outlined.styles = style;
IconFormatSize_Outlined = __decorate([
    customElement('mdui-icon-format-size--outlined')
], IconFormatSize_Outlined);
export { IconFormatSize_Outlined };
