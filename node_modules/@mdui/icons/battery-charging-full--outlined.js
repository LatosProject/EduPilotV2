import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatteryChargingFull_Outlined = class IconBatteryChargingFull_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>');
    }
};
IconBatteryChargingFull_Outlined.styles = style;
IconBatteryChargingFull_Outlined = __decorate([
    customElement('mdui-icon-battery-charging-full--outlined')
], IconBatteryChargingFull_Outlined);
export { IconBatteryChargingFull_Outlined };
