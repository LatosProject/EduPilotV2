import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMonitorWeight_Sharp = class IconMonitorWeight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41z"/><path d="M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z"/>');
    }
};
IconMonitorWeight_Sharp.styles = style;
IconMonitorWeight_Sharp = __decorate([
    customElement('mdui-icon-monitor-weight--sharp')
], IconMonitorWeight_Sharp);
export { IconMonitorWeight_Sharp };
