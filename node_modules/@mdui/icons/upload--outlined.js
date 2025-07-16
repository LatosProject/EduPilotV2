import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUpload_Outlined = class IconUpload_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z"/>');
    }
};
IconUpload_Outlined.styles = style;
IconUpload_Outlined = __decorate([
    customElement('mdui-icon-upload--outlined')
], IconUpload_Outlined);
export { IconUpload_Outlined };
