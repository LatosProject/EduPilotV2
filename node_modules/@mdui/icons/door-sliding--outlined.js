import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorSliding_Outlined = class IconDoorSliding_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10 13H8v-2h2v2zm6-2h-2v2h2v-2zm5 8v2H3v-2h1V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14h1zM11 5H6v14h5V5zm7 0h-5v14h5V5z"/>');
    }
};
IconDoorSliding_Outlined.styles = style;
IconDoorSliding_Outlined = __decorate([
    customElement('mdui-icon-door-sliding--outlined')
], IconDoorSliding_Outlined);
export { IconDoorSliding_Outlined };
