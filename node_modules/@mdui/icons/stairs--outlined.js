import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStairs_Outlined = class IconStairs_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18V6z"/>');
    }
};
IconStairs_Outlined.styles = style;
IconStairs_Outlined = __decorate([
    customElement('mdui-icon-stairs--outlined')
], IconStairs_Outlined);
export { IconStairs_Outlined };
