import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_1_Sharp = class IconFilter_1_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 5H1v18h18v-2H3V5zm11 10h2V5h-4v2h2v8zm9-14H5v18h18V1zm-2 16H7V3h14v14z"/>');
    }
};
IconFilter_1_Sharp.styles = style;
IconFilter_1_Sharp = __decorate([
    customElement('mdui-icon-filter-1--sharp')
], IconFilter_1_Sharp);
export { IconFilter_1_Sharp };
