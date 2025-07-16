import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShop_2_Sharp = class IconShop_2_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 9H1v13h18v-2H3z"/><path d="M18 5V1h-8v4H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3.5L12 15z"/>');
    }
};
IconShop_2_Sharp.styles = style;
IconShop_2_Sharp = __decorate([
    customElement('mdui-icon-shop-2--sharp')
], IconShop_2_Sharp);
export { IconShop_2_Sharp };
