import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorFront_Outlined = class IconDoorFront_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14zm-4-8h2v2h-2v-2z"/>');
    }
};
IconDoorFront_Outlined.styles = style;
IconDoorFront_Outlined = __decorate([
    customElement('mdui-icon-door-front--outlined')
], IconDoorFront_Outlined);
export { IconDoorFront_Outlined };
