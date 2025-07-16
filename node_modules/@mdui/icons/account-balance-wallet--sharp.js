import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountBalanceWallet_Sharp = class IconAccountBalanceWallet_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 18v3H3V3h18v3H10v12h11zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>');
    }
};
IconAccountBalanceWallet_Sharp.styles = style;
IconAccountBalanceWallet_Sharp = __decorate([
    customElement('mdui-icon-account-balance-wallet--sharp')
], IconAccountBalanceWallet_Sharp);
export { IconAccountBalanceWallet_Sharp };
