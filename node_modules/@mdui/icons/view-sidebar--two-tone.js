import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewSidebar_TwoTone = class IconViewSidebar_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 8.67h-2.5V6H20v2.67zm-2.5 2H20v2.67h-2.5v-2.67zM4 6h11.5v12H4V6zm13.5 12v-2.67H20V18h-2.5z" opacity=".3"/><path d="M2 4v16h20V4H2zm18 4.67h-2.5V6H20v2.67zm-2.5 2H20v2.67h-2.5v-2.67zM4 6h11.5v12H4V6zm13.5 12v-2.67H20V18h-2.5z"/>');
    }
};
IconViewSidebar_TwoTone.styles = style;
IconViewSidebar_TwoTone = __decorate([
    customElement('mdui-icon-view-sidebar--two-tone')
], IconViewSidebar_TwoTone);
export { IconViewSidebar_TwoTone };
