import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon10k_Sharp = class Icon10k_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 10.5h1.5v3H10v-3zM21 3H3v18h18V3zM7.5 15H6v-4.5H4.5V9h3v6zM13 9v6H8.5V9H13zm6 6h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19l-2.25 3L19 15z"/>');
    }
};
Icon10k_Sharp.styles = style;
Icon10k_Sharp = __decorate([
    customElement('mdui-icon-10k--sharp')
], Icon10k_Sharp);
export { Icon10k_Sharp };
