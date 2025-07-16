import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon4k_Sharp = class Icon4k_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-9 10.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1v1.51zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3 2 3z"/>');
    }
};
Icon4k_Sharp.styles = style;
Icon4k_Sharp = __decorate([
    customElement('mdui-icon-4k--sharp')
], Icon4k_Sharp);
export { Icon4k_Sharp };
