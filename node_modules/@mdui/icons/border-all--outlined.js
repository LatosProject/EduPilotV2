import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderAll_Outlined = class IconBorderAll_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>');
    }
};
IconBorderAll_Outlined.styles = style;
IconBorderAll_Outlined = __decorate([
    customElement('mdui-icon-border-all--outlined')
], IconBorderAll_Outlined);
export { IconBorderAll_Outlined };
