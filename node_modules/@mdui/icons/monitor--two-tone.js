import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMonitor_TwoTone = class IconMonitor_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/><path d="M4 5h16v11H4z" opacity=".3"/>');
    }
};
IconMonitor_TwoTone.styles = style;
IconMonitor_TwoTone = __decorate([
    customElement('mdui-icon-monitor--two-tone')
], IconMonitor_TwoTone);
export { IconMonitor_TwoTone };
