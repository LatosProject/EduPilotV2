import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorFront_TwoTone = class IconDoorFront_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 19h10V5H7v14zm6-8h2v2h-2v-2z" opacity=".3"/><path d="M13 11h2v2h-2z"/><path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"/>');
    }
};
IconDoorFront_TwoTone.styles = style;
IconDoorFront_TwoTone = __decorate([
    customElement('mdui-icon-door-front--two-tone')
], IconDoorFront_TwoTone);
export { IconDoorFront_TwoTone };
