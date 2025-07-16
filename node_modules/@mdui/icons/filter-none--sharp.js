import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterNone_Sharp = class IconFilterNone_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z"/>');
    }
};
IconFilterNone_Sharp.styles = style;
IconFilterNone_Sharp = __decorate([
    customElement('mdui-icon-filter-none--sharp')
], IconFilterNone_Sharp);
export { IconFilterNone_Sharp };
