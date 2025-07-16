import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMonitor_Sharp = class IconMonitor_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 3H2v15h5l-1 1v2h12v-2l-1-1h5V3zm-2 13H4V5h16v11z"/>');
    }
};
IconMonitor_Sharp.styles = style;
IconMonitor_Sharp = __decorate([
    customElement('mdui-icon-monitor--sharp')
], IconMonitor_Sharp);
export { IconMonitor_Sharp };
