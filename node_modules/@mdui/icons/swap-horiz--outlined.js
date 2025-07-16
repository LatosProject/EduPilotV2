import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwapHoriz_Outlined = class IconSwapHoriz_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>');
    }
};
IconSwapHoriz_Outlined.styles = style;
IconSwapHoriz_Outlined = __decorate([
    customElement('mdui-icon-swap-horiz--outlined')
], IconSwapHoriz_Outlined);
export { IconSwapHoriz_Outlined };
