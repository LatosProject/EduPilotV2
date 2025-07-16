import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSubscriptions_Sharp = class IconSubscriptions_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 8v12H2V10h20zm-6 6-6-3.27v6.53L16 16z"/>');
    }
};
IconSubscriptions_Sharp.styles = style;
IconSubscriptions_Sharp = __decorate([
    customElement('mdui-icon-subscriptions--sharp')
], IconSubscriptions_Sharp);
export { IconSubscriptions_Sharp };
