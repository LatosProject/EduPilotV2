import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShowChart = class IconShowChart extends LitElement {
    render() {
        return svgTag('<path d="m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>');
    }
};
IconShowChart.styles = style;
IconShowChart = __decorate([
    customElement('mdui-icon-show-chart')
], IconShowChart);
export { IconShowChart };
