import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenshotMonitor_Outlined = class IconScreenshotMonitor_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"/><path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"/>');
    }
};
IconScreenshotMonitor_Outlined.styles = style;
IconScreenshotMonitor_Outlined = __decorate([
    customElement('mdui-icon-screenshot-monitor--outlined')
], IconScreenshotMonitor_Outlined);
export { IconScreenshotMonitor_Outlined };
