import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSensorDoor_Outlined = class IconSensorDoor_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2zm-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5z"/>');
    }
};
IconSensorDoor_Outlined.styles = style;
IconSensorDoor_Outlined = __decorate([
    customElement('mdui-icon-sensor-door--outlined')
], IconSensorDoor_Outlined);
export { IconSensorDoor_Outlined };
