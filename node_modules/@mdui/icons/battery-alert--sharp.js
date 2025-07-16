import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatteryAlert_Sharp = class IconBatteryAlert_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4h-3V2h-4v2H7v18h10V4zm-4 14h-2v-2h2v2zm0-4h-2V9h2v5z"/>');
    }
};
IconBatteryAlert_Sharp.styles = style;
IconBatteryAlert_Sharp = __decorate([
    customElement('mdui-icon-battery-alert--sharp')
], IconBatteryAlert_Sharp);
export { IconBatteryAlert_Sharp };
