import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShop_2_TwoTone = class IconShop_2_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 16h14V7H7v9zm5-8 5.5 3.5L12 15V8z" opacity=".3"/><path d="M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z"/><path d="M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"/><path d="M12 8v7l5.5-3.5z"/>');
    }
};
IconShop_2_TwoTone.styles = style;
IconShop_2_TwoTone = __decorate([
    customElement('mdui-icon-shop-2--two-tone')
], IconShop_2_TwoTone);
export { IconShop_2_TwoTone };
