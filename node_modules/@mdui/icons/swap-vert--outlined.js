import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwapVert_Outlined = class IconSwapVert_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z"/>');
    }
};
IconSwapVert_Outlined.styles = style;
IconSwapVert_Outlined = __decorate([
    customElement('mdui-icon-swap-vert--outlined')
], IconSwapVert_Outlined);
export { IconSwapVert_Outlined };
