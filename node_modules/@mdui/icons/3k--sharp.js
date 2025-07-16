import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon3k_Sharp = class Icon3k_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM11 9v6H6.5v-1.5h3v-1h-2v-1h2v-1h-3V9H11zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3L18 15z"/>');
    }
};
Icon3k_Sharp.styles = style;
Icon3k_Sharp = __decorate([
    customElement('mdui-icon-3k--sharp')
], Icon3k_Sharp);
export { Icon3k_Sharp };
