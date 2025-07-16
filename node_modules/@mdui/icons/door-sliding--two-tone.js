import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorSliding_TwoTone = class IconDoorSliding_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 19h5V5h-5v14zm1-8h2v2h-2v-2zm-8 8h5V5H6v14zm2-8h2v2H8v-2z" opacity=".3"/><path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2h-1zm-9 0H6V5h5v14zm7 0h-5V5h5v14z"/><path d="M8 11h2v2H8zm6 0h2v2h-2z"/>');
    }
};
IconDoorSliding_TwoTone.styles = style;
IconDoorSliding_TwoTone = __decorate([
    customElement('mdui-icon-door-sliding--two-tone')
], IconDoorSliding_TwoTone);
export { IconDoorSliding_TwoTone };
