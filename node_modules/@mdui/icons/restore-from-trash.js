import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRestoreFromTrash = class IconRestoreFromTrash extends LitElement {
    render() {
        return svgTag('<path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm8 7v4h-4v-4H8l4-4 4 4h-2z"/>');
    }
};
IconRestoreFromTrash.styles = style;
IconRestoreFromTrash = __decorate([
    customElement('mdui-icon-restore-from-trash')
], IconRestoreFromTrash);
export { IconRestoreFromTrash };
