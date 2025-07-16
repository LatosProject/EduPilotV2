import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackupTable_Rounded = class IconBackupTable_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4 7v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V7c0-.55.45-1 1-1s1 .45 1 1z"/><path d="M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm9 7h5v5h-5v-5zm-7 0h5v5H8v-5zm0-7h12v5H8V4z"/>');
    }
};
IconBackupTable_Rounded.styles = style;
IconBackupTable_Rounded = __decorate([
    customElement('mdui-icon-backup-table--rounded')
], IconBackupTable_Rounded);
export { IconBackupTable_Rounded };
