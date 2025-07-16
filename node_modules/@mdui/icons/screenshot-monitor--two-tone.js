import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenshotMonitor_TwoTone = class IconScreenshotMonitor_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 17h16V5H4v12zm11-2.5h2.5V12H19v4h-4v-1.5zM5 6h4v1.5H6.5V10H5V6z" opacity=".3"/><path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"/><path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"/>');
    }
};
IconScreenshotMonitor_TwoTone.styles = style;
IconScreenshotMonitor_TwoTone = __decorate([
    customElement('mdui-icon-screenshot-monitor--two-tone')
], IconScreenshotMonitor_TwoTone);
export { IconScreenshotMonitor_TwoTone };
