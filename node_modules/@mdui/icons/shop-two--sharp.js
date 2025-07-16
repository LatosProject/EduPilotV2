import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShopTwo_Sharp = class IconShopTwo_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 9H1v13h18v-2H3V9zm15-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"/>');
    }
};
IconShopTwo_Sharp.styles = style;
IconShopTwo_Sharp = __decorate([
    customElement('mdui-icon-shop-two--sharp')
], IconShopTwo_Sharp);
export { IconShopTwo_Sharp };
