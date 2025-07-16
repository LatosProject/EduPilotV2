import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDriveFolderUpload = class IconDriveFolderUpload extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10zM8 13.01l1.41 1.41L11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9 8 13.01z"/>');
    }
};
IconDriveFolderUpload.styles = style;
IconDriveFolderUpload = __decorate([
    customElement('mdui-icon-drive-folder-upload')
], IconDriveFolderUpload);
export { IconDriveFolderUpload };
