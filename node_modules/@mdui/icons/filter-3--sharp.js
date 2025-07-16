import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_3_Sharp = class IconFilter_3_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 1H5v18h18V1zm-2 16H7V3h14v14zM3 5H1v18h18v-2H3V5zm14 10V5h-6v2h4v2h-2v2h2v2h-4v2h6z"/>');
    }
};
IconFilter_3_Sharp.styles = style;
IconFilter_3_Sharp = __decorate([
    customElement('mdui-icon-filter-3--sharp')
], IconFilter_3_Sharp);
export { IconFilter_3_Sharp };
