import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCandlestickChart_Outlined = class IconCandlestickChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z"/>');
    }
};
IconCandlestickChart_Outlined.styles = style;
IconCandlestickChart_Outlined = __decorate([
    customElement('mdui-icon-candlestick-chart--outlined')
], IconCandlestickChart_Outlined);
export { IconCandlestickChart_Outlined };
