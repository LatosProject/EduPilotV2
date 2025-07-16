import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDashboardCustomize_Sharp = class IconDashboardCustomize_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm15 0h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/>');
    }
};
IconDashboardCustomize_Sharp.styles = style;
IconDashboardCustomize_Sharp = __decorate([
    customElement('mdui-icon-dashboard-customize--sharp')
], IconDashboardCustomize_Sharp);
export { IconDashboardCustomize_Sharp };
