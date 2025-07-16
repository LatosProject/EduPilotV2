import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileUpload = class IconFileUpload extends LitElement {
    render() {
        return svgTag('<path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>');
    }
};
IconFileUpload.styles = style;
IconFileUpload = __decorate([
    customElement('mdui-icon-file-upload')
], IconFileUpload);
export { IconFileUpload };
