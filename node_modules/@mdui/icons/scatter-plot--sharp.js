import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScatterPlot_Sharp = class IconScatterPlot_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/><circle cx="16.6" cy="17.6" r="3"/>');
    }
};
IconScatterPlot_Sharp.styles = style;
IconScatterPlot_Sharp = __decorate([
    customElement('mdui-icon-scatter-plot--sharp')
], IconScatterPlot_Sharp);
export { IconScatterPlot_Sharp };
