import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMan_3_Outlined = class IconMan_3_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2zm-2-5.249L14.248 4 12 6.248 9.75 4z"/>');
    }
};
IconMan_3_Outlined.styles = style;
IconMan_3_Outlined = __decorate([
    customElement('mdui-icon-man-3--outlined')
], IconMan_3_Outlined);
export { IconMan_3_Outlined };
