import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpaceDashboard_TwoTone = class IconSpaceDashboard_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z"/>');
    }
};
IconSpaceDashboard_TwoTone.styles = style;
IconSpaceDashboard_TwoTone = __decorate([
    customElement('mdui-icon-space-dashboard--two-tone')
], IconSpaceDashboard_TwoTone);
export { IconSpaceDashboard_TwoTone };
