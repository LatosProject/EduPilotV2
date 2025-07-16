import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackupTable_Outlined = class IconBackupTable_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2z"/><path d="M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 16H4v-5h5v5zm7 0h-5v-5h5v5zm0-7H4V4h12v5z"/>');
    }
};
IconBackupTable_Outlined.styles = style;
IconBackupTable_Outlined = __decorate([
    customElement('mdui-icon-backup-table--outlined')
], IconBackupTable_Outlined);
export { IconBackupTable_Outlined };
