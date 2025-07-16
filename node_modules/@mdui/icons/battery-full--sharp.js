import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatteryFull_Sharp = class IconBatteryFull_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 4h-3V2h-4v2H7v18h10V4z"/>');
    }
};
IconBatteryFull_Sharp.styles = style;
IconBatteryFull_Sharp = __decorate([
    customElement('mdui-icon-battery-full--sharp')
], IconBatteryFull_Sharp);
export { IconBatteryFull_Sharp };
