import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderAll_TwoTone = class IconBorderAll_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM11 19H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>');
    }
};
IconBorderAll_TwoTone.styles = style;
IconBorderAll_TwoTone = __decorate([
    customElement('mdui-icon-border-all--two-tone')
], IconBorderAll_TwoTone);
export { IconBorderAll_TwoTone };
