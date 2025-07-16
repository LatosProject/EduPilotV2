import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWaterfallChart = class IconWaterfallChart extends LitElement {
    render() {
        return svgTag('<path d="M18 4h3v16h-3zM3 13h3v7H3zm11-9h3v3h-3zm-4 1h3v4h-3zm-3 5h3v4H7z"/>');
    }
};
IconWaterfallChart.styles = style;
IconWaterfallChart = __decorate([
    customElement('mdui-icon-waterfall-chart')
], IconWaterfallChart);
export { IconWaterfallChart };
