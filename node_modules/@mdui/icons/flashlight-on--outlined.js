import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashlightOn_Outlined = class IconFlashlightOn_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 2H6v6l2 3v11h8V11l2-3V2zm-2 2v1H8V4h8zm-2 6.4V20h-4v-9.61l-2-3V7h8v.39l-2 3.01z"/><circle cx="12" cy="14" r="1.5"/>');
    }
};
IconFlashlightOn_Outlined.styles = style;
IconFlashlightOn_Outlined = __decorate([
    customElement('mdui-icon-flashlight-on--outlined')
], IconFlashlightOn_Outlined);
export { IconFlashlightOn_Outlined };
