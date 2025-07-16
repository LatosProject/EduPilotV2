import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDashboard_Outlined = class IconDashboard_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/>');
    }
};
IconDashboard_Outlined.styles = style;
IconDashboard_Outlined = __decorate([
    customElement('mdui-icon-dashboard--outlined')
], IconDashboard_Outlined);
export { IconDashboard_Outlined };
