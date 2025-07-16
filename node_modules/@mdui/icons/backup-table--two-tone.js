import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackupTable_TwoTone = class IconBackupTable_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z" opacity=".3"/><path d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2z"/><path d="M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM4 4h12v5H4V4zm5 12H4v-5h5v5zm2-5h5v5h-5v-5z"/>');
    }
};
IconBackupTable_TwoTone.styles = style;
IconBackupTable_TwoTone = __decorate([
    customElement('mdui-icon-backup-table--two-tone')
], IconBackupTable_TwoTone);
export { IconBackupTable_TwoTone };
