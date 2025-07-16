import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriceCheck = class IconPriceCheck extends LitElement {
    render() {
        return svgTag('<path d="M12 13V9c0-.55-.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c.55 0 1-.45 1-1zm7.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"/>');
    }
};
IconPriceCheck.styles = style;
IconPriceCheck = __decorate([
    customElement('mdui-icon-price-check')
], IconPriceCheck);
export { IconPriceCheck };
