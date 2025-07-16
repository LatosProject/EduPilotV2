import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon2k_TwoTone = class Icon2k_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13V9zm-6.5 3.5c0-.55.45-1 1-1h2v-1h-3V9H10c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H8v1h3V15H6.5v-2.5z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M11 13.5H8v-1h2c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1H6.5v1.5h3v1h-2c-.55 0-1 .45-1 1V15H11v-1.5zm3.5-.75L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z"/>');
    }
};
Icon2k_TwoTone.styles = style;
Icon2k_TwoTone = __decorate([
    customElement('mdui-icon-2k--two-tone')
], Icon2k_TwoTone);
export { Icon2k_TwoTone };
