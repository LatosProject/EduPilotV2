import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUpload_TwoTone = class IconUpload_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity=".3"/><path d="m12 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z"/>');
    }
};
IconUpload_TwoTone.styles = style;
IconUpload_TwoTone = __decorate([
    customElement('mdui-icon-upload--two-tone')
], IconUpload_TwoTone);
export { IconUpload_TwoTone };
