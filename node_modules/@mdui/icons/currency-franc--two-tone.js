import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurrencyFranc_TwoTone = class IconCurrencyFranc_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z"/>');
    }
};
IconCurrencyFranc_TwoTone.styles = style;
IconCurrencyFranc_TwoTone = __decorate([
    customElement('mdui-icon-currency-franc--two-tone')
], IconCurrencyFranc_TwoTone);
export { IconCurrencyFranc_TwoTone };
