import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTrendingFlat_Outlined = class IconTrendingFlat_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m22 12-4-4v3H3v2h15v3l4-4z"/>');
    }
};
IconTrendingFlat_Outlined.styles = style;
IconTrendingFlat_Outlined = __decorate([
    customElement('mdui-icon-trending-flat--outlined')
], IconTrendingFlat_Outlined);
export { IconTrendingFlat_Outlined };
