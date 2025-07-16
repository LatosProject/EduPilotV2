import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoorBack_Outlined = class IconDoorBack_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z"/><path d="M9 11h2v2H9z"/>');
    }
};
IconDoorBack_Outlined.styles = style;
IconDoorBack_Outlined = __decorate([
    customElement('mdui-icon-door-back--outlined')
], IconDoorBack_Outlined);
export { IconDoorBack_Outlined };
