import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBubbleChart = class IconBubbleChart extends LitElement {
    render() {
        return svgTag('<circle cx="7.2" cy="14.4" r="3.2"/><circle cx="14.8" cy="18" r="2"/><circle cx="15.2" cy="8.8" r="4.8"/>');
    }
};
IconBubbleChart.styles = style;
IconBubbleChart = __decorate([
    customElement('mdui-icon-bubble-chart')
], IconBubbleChart);
export { IconBubbleChart };
