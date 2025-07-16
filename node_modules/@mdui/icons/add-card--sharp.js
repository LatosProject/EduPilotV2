import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddCard_Sharp = class IconAddCard_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2.01 4 2 20h12v-2H4v-6h18V4H2.01zM20 8H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"/>');
    }
};
IconAddCard_Sharp.styles = style;
IconAddCard_Sharp = __decorate([
    customElement('mdui-icon-add-card--sharp')
], IconAddCard_Sharp);
export { IconAddCard_Sharp };
