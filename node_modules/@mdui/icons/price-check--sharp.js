import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriceCheck_Sharp = class IconPriceCheck_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 8H6V6h5V4H8.5V3h-2v1H4v6h5v2H4v2h2.5v1h2v-1H11zm8.59 4.52-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"/>');
    }
};
IconPriceCheck_Sharp.styles = style;
IconPriceCheck_Sharp = __decorate([
    customElement('mdui-icon-price-check--sharp')
], IconPriceCheck_Sharp);
export { IconPriceCheck_Sharp };
