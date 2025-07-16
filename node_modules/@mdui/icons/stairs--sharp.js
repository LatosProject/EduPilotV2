import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStairs_Sharp = class IconStairs_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm15 5h-2.42v3.33H13v3.33h-2.58V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18v2z"/>');
    }
};
IconStairs_Sharp.styles = style;
IconStairs_Sharp = __decorate([
    customElement('mdui-icon-stairs--sharp')
], IconStairs_Sharp);
export { IconStairs_Sharp };
