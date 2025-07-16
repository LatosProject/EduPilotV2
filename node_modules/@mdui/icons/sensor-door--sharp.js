import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSensorDoor_Sharp = class IconSensorDoor_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4v20h16V2zm-4.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>');
    }
};
IconSensorDoor_Sharp.styles = style;
IconSensorDoor_Sharp = __decorate([
    customElement('mdui-icon-sensor-door--sharp')
], IconSensorDoor_Sharp);
export { IconSensorDoor_Sharp };
