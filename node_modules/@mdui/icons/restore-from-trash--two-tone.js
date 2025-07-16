import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRestoreFromTrash_TwoTone = class IconRestoreFromTrash_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 14h-2v4h-4v-4H8v5h8zm0 0V9H8v5l4-4z" opacity=".3"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2-5V9h8v10H8v-5zm7.5-10-1-1h-5l-1 1H5v2h14V4zM10 18h4v-4h2l-4-4-4 4h2z"/>');
    }
};
IconRestoreFromTrash_TwoTone.styles = style;
IconRestoreFromTrash_TwoTone = __decorate([
    customElement('mdui-icon-restore-from-trash--two-tone')
], IconRestoreFromTrash_TwoTone);
export { IconRestoreFromTrash_TwoTone };
