import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_4_Sharp = class IconFilter_4_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 5H1v18h18v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm8-14H5v18h18V1zm-2 16H7V3h14v14z"/>');
    }
};
IconFilter_4_Sharp.styles = style;
IconFilter_4_Sharp = __decorate([
    customElement('mdui-icon-filter-4--sharp')
], IconFilter_4_Sharp);
export { IconFilter_4_Sharp };
