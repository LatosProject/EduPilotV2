import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMuseum_Outlined = class IconMuseum_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z"/><path d="m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z"/>');
    }
};
IconMuseum_Outlined.styles = style;
IconMuseum_Outlined = __decorate([
    customElement('mdui-icon-museum--outlined')
], IconMuseum_Outlined);
export { IconMuseum_Outlined };
