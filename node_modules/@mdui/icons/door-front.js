import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorFront = class IconDoorFront extends LitElement {
    render() {
        return svgTag('<path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-4-6h-2v-2h2v2z"/>');
    }
};
IconDoorFront.styles = style;
IconDoorFront = __decorate([
    customElement('mdui-icon-door-front')
], IconDoorFront);
export { IconDoorFront };
