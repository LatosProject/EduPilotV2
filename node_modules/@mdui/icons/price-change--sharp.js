import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriceChange_Sharp = class IconPriceChange_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h20V4H2zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2v2zm4 6.25-2-2h4l-2 2zM14 10l2-2 2 2h-4z"/>');
    }
};
IconPriceChange_Sharp.styles = style;
IconPriceChange_Sharp = __decorate([
    customElement('mdui-icon-price-change--sharp')
], IconPriceChange_Sharp);
export { IconPriceChange_Sharp };
