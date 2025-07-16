import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_2_Sharp = class IconFilter_2_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6v-2z"/>');
    }
};
IconFilter_2_Sharp.styles = style;
IconFilter_2_Sharp = __decorate([
    customElement('mdui-icon-filter-2--sharp')
], IconFilter_2_Sharp);
export { IconFilter_2_Sharp };
