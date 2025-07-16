import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon1k_Sharp = class Icon1k_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM10 15H8.5v-4.5H7V9h3v6zm7 0h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25 9H17l-2.25 3L17 15z"/>');
    }
};
Icon1k_Sharp.styles = style;
Icon1k_Sharp = __decorate([
    customElement('mdui-icon-1k--sharp')
], Icon1k_Sharp);
export { Icon1k_Sharp };
