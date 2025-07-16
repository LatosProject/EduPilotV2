import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon4k_TwoTone = class Icon4k_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5H5v14h14V5zm-7 8.51h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1v1.51zM18.2 15h-1.7l-2-3v3H13V9h1.5v3l2-3h1.7l-2 3 2 3z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2zM5 5h14v14H5V5zm6 4H9.5v3H8V9H6.5v4.5h3V15H11v-1.49h1V12h-1zm5.5 0-2 3 2 3h1.7l-2-3 2-3zM13 9v6h1.5V9z"/>');
    }
};
Icon4k_TwoTone.styles = style;
Icon4k_TwoTone = __decorate([
    customElement('mdui-icon-4k--two-tone')
], Icon4k_TwoTone);
export { Icon4k_TwoTone };
