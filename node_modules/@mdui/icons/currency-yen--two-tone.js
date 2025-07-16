import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurrencyYen_TwoTone = class IconCurrencyYen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z"/>');
    }
};
IconCurrencyYen_TwoTone.styles = style;
IconCurrencyYen_TwoTone = __decorate([
    customElement('mdui-icon-currency-yen--two-tone')
], IconCurrencyYen_TwoTone);
export { IconCurrencyYen_TwoTone };
