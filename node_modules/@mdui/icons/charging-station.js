import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChargingStation = class IconChargingStation extends LitElement {
    render() {
        return svgTag('<path d="m14.5 11-3 6v-4h-2l3-6v4h2zM7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 5v12h10V6H7z"/>');
    }
};
IconChargingStation.styles = style;
IconChargingStation = __decorate([
    customElement('mdui-icon-charging-station')
], IconChargingStation);
export { IconChargingStation };
