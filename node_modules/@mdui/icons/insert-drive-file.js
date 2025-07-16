import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertDriveFile = class IconInsertDriveFile extends LitElement {
    render() {
        return svgTag('<path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>');
    }
};
IconInsertDriveFile.styles = style;
IconInsertDriveFile = __decorate([
    customElement('mdui-icon-insert-drive-file')
], IconInsertDriveFile);
export { IconInsertDriveFile };
