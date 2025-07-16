import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorBack_TwoTone = class IconDoorBack_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 19h10V5H7v14zm2-8h2v2H9v-2z" opacity=".3"/><path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"/><path d="M9 11h2v2H9z"/>');
    }
};
IconDoorBack_TwoTone.styles = style;
IconDoorBack_TwoTone = __decorate([
    customElement('mdui-icon-door-back--two-tone')
], IconDoorBack_TwoTone);
export { IconDoorBack_TwoTone };
