import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertDriveFile_Outlined = class IconInsertDriveFile_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>');
    }
};
IconInsertDriveFile_Outlined.styles = style;
IconInsertDriveFile_Outlined = __decorate([
    customElement('mdui-icon-insert-drive-file--outlined')
], IconInsertDriveFile_Outlined);
export { IconInsertDriveFile_Outlined };
