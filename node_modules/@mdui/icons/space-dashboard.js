import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpaceDashboard = class IconSpaceDashboard extends LitElement {
    render() {
        return svgTag('<path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"/>');
    }
};
IconSpaceDashboard.styles = style;
IconSpaceDashboard = __decorate([
    customElement('mdui-icon-space-dashboard')
], IconSpaceDashboard);
export { IconSpaceDashboard };
