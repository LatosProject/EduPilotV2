import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRestoreFromTrash_Sharp = class IconRestoreFromTrash_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 21h12V7H6v14zm6-11 4 4h-2v4h-4v-4H8l4-4zm3.5-6-1-1h-5l-1 1H5v2h14V4z"/>');
    }
};
IconRestoreFromTrash_Sharp.styles = style;
IconRestoreFromTrash_Sharp = __decorate([
    customElement('mdui-icon-restore-from-trash--sharp')
], IconRestoreFromTrash_Sharp);
export { IconRestoreFromTrash_Sharp };
