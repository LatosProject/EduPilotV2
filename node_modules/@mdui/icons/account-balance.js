import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountBalance = class IconAccountBalance extends LitElement {
    render() {
        return svgTag('<path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"/>');
    }
};
IconAccountBalance.styles = style;
IconAccountBalance = __decorate([
    customElement('mdui-icon-account-balance')
], IconAccountBalance);
export { IconAccountBalance };
