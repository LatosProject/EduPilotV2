import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddCard_Outlined = class IconAddCard_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"/>');
    }
};
IconAddCard_Outlined.styles = style;
IconAddCard_Outlined = __decorate([
    customElement('mdui-icon-add-card--outlined')
], IconAddCard_Outlined);
export { IconAddCard_Outlined };
