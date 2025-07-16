import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPivotTableChart_TwoTone = class IconPivotTableChart_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zm15 4-4 4h3v2c0 1.1-.9 2-2 2h-2v-3l-4 4 4 4v-3h2c2.21 0 4-1.79 4-4v-2h3l-4-4z"/>');
    }
};
IconPivotTableChart_TwoTone.styles = style;
IconPivotTableChart_TwoTone = __decorate([
    customElement('mdui-icon-pivot-table-chart--two-tone')
], IconPivotTableChart_TwoTone);
export { IconPivotTableChart_TwoTone };
