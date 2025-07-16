import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDriveFileMoveRtl = class IconDriveFileMoveRtl extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 11-4-4 4-4v3h4v2h-4v3z"/>');
    }
};
IconDriveFileMoveRtl.styles = style;
IconDriveFileMoveRtl = __decorate([
    customElement('mdui-icon-drive-file-move-rtl')
], IconDriveFileMoveRtl);
export { IconDriveFileMoveRtl };
