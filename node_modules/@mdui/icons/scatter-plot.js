import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScatterPlot = class IconScatterPlot extends LitElement {
    render() {
        return svgTag('<circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/><circle cx="16.6" cy="17.6" r="3"/>');
    }
};
IconScatterPlot.styles = style;
IconScatterPlot = __decorate([
    customElement('mdui-icon-scatter-plot')
], IconScatterPlot);
export { IconScatterPlot };
