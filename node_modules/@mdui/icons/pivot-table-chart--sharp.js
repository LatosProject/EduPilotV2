import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPivotTableChart_Sharp = class IconPivotTableChart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 3h11v5H10zm-7 7h5v11H3zm0-7h5v5H3zm15 6-4 4h3v4h-4v-3l-4 4 4 4v-3h6v-6h3z"/>');
    }
};
IconPivotTableChart_Sharp.styles = style;
IconPivotTableChart_Sharp = __decorate([
    customElement('mdui-icon-pivot-table-chart--sharp')
], IconPivotTableChart_Sharp);
export { IconPivotTableChart_Sharp };
