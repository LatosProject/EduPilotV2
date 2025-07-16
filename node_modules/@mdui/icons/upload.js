import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUpload = class IconUpload extends LitElement {
    render() {
        return svgTag('<path d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"/>');
    }
};
IconUpload.styles = style;
IconUpload = __decorate([
    customElement('mdui-icon-upload')
], IconUpload);
export { IconUpload };
