import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatteryChargingFull_Sharp = class IconBatteryChargingFull_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4h-3V2h-4v2H7v18h10V4zm-6 16v-5.5H9L13 7v5.5h2L11 20z"/>');
    }
};
IconBatteryChargingFull_Sharp.styles = style;
IconBatteryChargingFull_Sharp = __decorate([
    customElement('mdui-icon-battery-charging-full--sharp')
], IconBatteryChargingFull_Sharp);
export { IconBatteryChargingFull_Sharp };
