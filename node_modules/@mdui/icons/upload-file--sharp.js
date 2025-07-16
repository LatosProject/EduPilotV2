import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUploadFile_Sharp = class IconUploadFile_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm-1 13v4h-2v-4H8l4.01-4L16 15h-3zm0-6V3.5L18.5 9H13z"/>');
    }
};
IconUploadFile_Sharp.styles = style;
IconUploadFile_Sharp = __decorate([
    customElement('mdui-icon-upload-file--sharp')
], IconUploadFile_Sharp);
export { IconUploadFile_Sharp };
