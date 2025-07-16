import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashOff = class IconFlashOff extends LitElement {
    render() {
        return svgTag('<path d="M3.27 3 2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"/>');
    }
};
IconFlashOff.styles = style;
IconFlashOff = __decorate([
    customElement('mdui-icon-flash-off')
], IconFlashOff);
export { IconFlashOff };
