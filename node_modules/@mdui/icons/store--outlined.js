import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStore_Outlined = class IconStore_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m18.36 9 .6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"/>');
    }
};
IconStore_Outlined.styles = style;
IconStore_Outlined = __decorate([
    customElement('mdui-icon-store--outlined')
], IconStore_Outlined);
export { IconStore_Outlined };
