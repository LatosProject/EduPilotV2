import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUploadFile_Outlined = class IconUploadFile_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11 8 15.01z"/>');
    }
};
IconUploadFile_Outlined.styles = style;
IconUploadFile_Outlined = __decorate([
    customElement('mdui-icon-upload-file--outlined')
], IconUploadFile_Outlined);
export { IconUploadFile_Outlined };
