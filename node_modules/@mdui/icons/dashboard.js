import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDashboard = class IconDashboard extends LitElement {
    render() {
        return svgTag('<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>');
    }
};
IconDashboard.styles = style;
IconDashboard = __decorate([
    customElement('mdui-icon-dashboard')
], IconDashboard);
export { IconDashboard };
