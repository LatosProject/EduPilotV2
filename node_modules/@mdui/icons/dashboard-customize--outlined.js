import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDashboardCustomize_Outlined = class IconDashboardCustomize_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/>');
    }
};
IconDashboardCustomize_Outlined.styles = style;
IconDashboardCustomize_Outlined = __decorate([
    customElement('mdui-icon-dashboard-customize--outlined')
], IconDashboardCustomize_Outlined);
export { IconDashboardCustomize_Outlined };
