import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCreditCard_Rounded = class IconCreditCard_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1zm1-10H4V6h16v2z"/>');
    }
};
IconCreditCard_Rounded.styles = style;
IconCreditCard_Rounded = __decorate([
    customElement('mdui-icon-credit-card--rounded')
], IconCreditCard_Rounded);
export { IconCreditCard_Rounded };
