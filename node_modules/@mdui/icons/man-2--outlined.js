import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMan_2_Outlined = class IconMan_2_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2.5v7h3v-7H16V9c0-1.1-.9-2-2-2z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconMan_2_Outlined.styles = style;
IconMan_2_Outlined = __decorate([
    customElement('mdui-icon-man-2--outlined')
], IconMan_2_Outlined);
export { IconMan_2_Outlined };
