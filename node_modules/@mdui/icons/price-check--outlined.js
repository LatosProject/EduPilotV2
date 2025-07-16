import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriceCheck_Outlined = class IconPriceCheck_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 13V9c0-.55-.45-1-1-1H6V6h5V4H8.5V3h-2v1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H4v2h2.5v1h2v-1H10c.55 0 1-.45 1-1zm8.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"/>');
    }
};
IconPriceCheck_Outlined.styles = style;
IconPriceCheck_Outlined = __decorate([
    customElement('mdui-icon-price-check--outlined')
], IconPriceCheck_Outlined);
export { IconPriceCheck_Outlined };
