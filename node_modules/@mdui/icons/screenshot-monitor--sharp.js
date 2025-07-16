import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenshotMonitor_Sharp = class IconScreenshotMonitor_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z"/><path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"/>');
    }
};
IconScreenshotMonitor_Sharp.styles = style;
IconScreenshotMonitor_Sharp = __decorate([
    customElement('mdui-icon-screenshot-monitor--sharp')
], IconScreenshotMonitor_Sharp);
export { IconScreenshotMonitor_Sharp };
