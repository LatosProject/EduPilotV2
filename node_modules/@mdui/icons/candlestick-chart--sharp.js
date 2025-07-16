import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCandlestickChart_Sharp = class IconCandlestickChart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"/>');
    }
};
IconCandlestickChart_Sharp.styles = style;
IconCandlestickChart_Sharp = __decorate([
    customElement('mdui-icon-candlestick-chart--sharp')
], IconCandlestickChart_Sharp);
export { IconCandlestickChart_Sharp };
