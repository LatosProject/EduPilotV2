import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTrendingFlat_Sharp = class IconTrendingFlat_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m22 12-4-4v3H3v2h15v3l4-4z"/>');
    }
};
IconTrendingFlat_Sharp.styles = style;
IconTrendingFlat_Sharp = __decorate([
    customElement('mdui-icon-trending-flat--sharp')
], IconTrendingFlat_Sharp);
export { IconTrendingFlat_Sharp };
