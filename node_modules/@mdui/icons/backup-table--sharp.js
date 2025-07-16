import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackupTable_Sharp = class IconBackupTable_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 6v14H6v2h16V6z"/><path d="M18 2H2v16h16V2zM9 16H4v-5h5v5zm7 0h-5v-5h5v5zm0-7H4V4h12v5z"/>');
    }
};
IconBackupTable_Sharp.styles = style;
IconBackupTable_Sharp = __decorate([
    customElement('mdui-icon-backup-table--sharp')
], IconBackupTable_Sharp);
export { IconBackupTable_Sharp };
