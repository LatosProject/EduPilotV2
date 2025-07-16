import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_9_Sharp = class IconFilter_9_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zM17 5h-6v6h4v2h-4v2h6V5zm-2 4h-2V7h2v2z"/>');
    }
};
IconFilter_9_Sharp.styles = style;
IconFilter_9_Sharp = __decorate([
    customElement('mdui-icon-filter-9--sharp')
], IconFilter_9_Sharp);
export { IconFilter_9_Sharp };
