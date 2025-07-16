import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewSidebar_Rounded = class IconViewSidebar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M15 20H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1zm4-12h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 12h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0-6h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1z"/>');
    }
};
IconViewSidebar_Rounded.styles = style;
IconViewSidebar_Rounded = __decorate([
    customElement('mdui-icon-view-sidebar--rounded')
], IconViewSidebar_Rounded);
export { IconViewSidebar_Rounded };
