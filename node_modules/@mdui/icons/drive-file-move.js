import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDriveFileMove = class IconDriveFileMove extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 12v-3h-4v-4h4V8l5 5-5 5z"/>');
    }
};
IconDriveFileMove.styles = style;
IconDriveFileMove = __decorate([
    customElement('mdui-icon-drive-file-move')
], IconDriveFileMove);
export { IconDriveFileMove };
