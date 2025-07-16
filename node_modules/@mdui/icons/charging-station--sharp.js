import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChargingStation_Sharp = class IconChargingStation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m14.5 11-3 6v-4h-2l3-6v4h2zM5 1h14v22H5V1zm2 5v12h10V6H7z"/>');
    }
};
IconChargingStation_Sharp.styles = style;
IconChargingStation_Sharp = __decorate([
    customElement('mdui-icon-charging-station--sharp')
], IconChargingStation_Sharp);
export { IconChargingStation_Sharp };
