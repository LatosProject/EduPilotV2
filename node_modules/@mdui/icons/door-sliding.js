import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorSliding = class IconDoorSliding extends LitElement {
    render() {
        return svgTag('<path d="M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14H3v2h18v-2h-1zm-10-6H8v-2h2v2zm6 0h-2v-2h2v2z"/>');
    }
};
IconDoorSliding.styles = style;
IconDoorSliding = __decorate([
    customElement('mdui-icon-door-sliding')
], IconDoorSliding);
export { IconDoorSliding };
