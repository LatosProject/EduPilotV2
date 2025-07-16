import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCreditCard_Sharp = class IconCreditCard_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2.01L2 20h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z"/>');
    }
};
IconCreditCard_Sharp.styles = style;
IconCreditCard_Sharp = __decorate([
    customElement('mdui-icon-credit-card--sharp')
], IconCreditCard_Sharp);
export { IconCreditCard_Sharp };
