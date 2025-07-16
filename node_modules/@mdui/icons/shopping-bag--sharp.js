import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShoppingBag_Sharp = class IconShoppingBag_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-4c0-2.21-1.79-4-4-4S8 3.79 8 6H4v16h16V6zm-10 5H8V8h2v3zm2-7c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 7h-2V8h2v3z"/>');
    }
};
IconShoppingBag_Sharp.styles = style;
IconShoppingBag_Sharp = __decorate([
    customElement('mdui-icon-shopping-bag--sharp')
], IconShoppingBag_Sharp);
export { IconShoppingBag_Sharp };
