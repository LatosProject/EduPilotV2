import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileUpload_TwoTone = class IconFileUpload_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity=".3"/><path d="M5 18h14v2H5zm0-8h4v6h6v-6h4l-7-7-7 7zm8-2v6h-2V8H9.83L12 5.83 14.17 8H13z"/>');
    }
};
IconFileUpload_TwoTone.styles = style;
IconFileUpload_TwoTone = __decorate([
    customElement('mdui-icon-file-upload--two-tone')
], IconFileUpload_TwoTone);
export { IconFileUpload_TwoTone };
