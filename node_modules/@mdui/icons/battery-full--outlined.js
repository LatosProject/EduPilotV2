import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatteryFull_Outlined = class IconBatteryFull_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>');
    }
};
IconBatteryFull_Outlined.styles = style;
IconBatteryFull_Outlined = __decorate([
    customElement('mdui-icon-battery-full--outlined')
], IconBatteryFull_Outlined);
export { IconBatteryFull_Outlined };
