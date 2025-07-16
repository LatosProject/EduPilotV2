import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_5_Sharp = class IconFilter_5_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 1H5v18h18V1zm-2 16H7V3h14v14zM3 5H1v18h18v-2H3V5zm14 10V9h-4V7h4V5h-6v6h4v2h-4v2h6z"/>');
    }
};
IconFilter_5_Sharp.styles = style;
IconFilter_5_Sharp = __decorate([
    customElement('mdui-icon-filter-5--sharp')
], IconFilter_5_Sharp);
export { IconFilter_5_Sharp };
