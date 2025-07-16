import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashlightOff = class IconFlashlightOff extends LitElement {
    render() {
        return svgTag('<path d="M18 5V2H6v1.17L7.83 5zm-2 6 2-3V7H9.83L16 13.17zM2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81z"/>');
    }
};
IconFlashlightOff.styles = style;
IconFlashlightOff = __decorate([
    customElement('mdui-icon-flashlight-off')
], IconFlashlightOff);
export { IconFlashlightOff };
